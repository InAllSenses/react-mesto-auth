import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Register from "./Register.js";
import Login from "./Login.js";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

import PopupInfoTooltip from "./InfoTooltip";
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRouteElement from "./ProtectedRoute";

import api from "../utils/Api";
import apiAuth from "../utils/Auth"

import avatar from "../images/avatar.png";
import correct from "../images/correct.svg";
import incorrect from "../images/incorrect.svg";

import { CurrentUserContext } from "../contexts/CurrentUserContext";


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = React.useState(false);

  const [isPopupInfoTooltipCorrectOpen, setIsPopupInfoTooltipCorrectOpen] = React.useState(false);
  const [isPopupInfoTooltipIncorrectOpen, setIsPopupInfoTooltipIncorrectOpen] = React.useState(false);

  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({
    name: "Жак-Ив Кусто",
    about: "Исследователь океана",
    avatar: avatar
  });

  const [ loggedIn, setLoggedIn ] = React.useState(false);
  const [authInfo, setAuthInfo] = React.useState({});

  const navigate = useNavigate();

  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setCurrentUser(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
    .then((data) => {
      setCards(data);
    })
    .catch((err) => {
      console.log(err);
    });

  }, []);

  function checkToken() {
    const token = localStorage.getItem("token");
    if (token !== null) {
      apiAuth.checkToken(token)
      .then((data) => {
        setAuthInfo(data);
        setLoggedIn(true);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        if (loggedIn) {
          setAuthInfo({});
          setLoggedIn(false);
        }
      });
    }
  }

  React.useEffect(() => {
    checkToken();
  }, [])



  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
  }

  function handleRegister(email, password) {
    apiAuth.register(email, password)
    .then((data) => {
      navigate("/sign-in", { replace: true });
      setIsPopupInfoTooltipCorrectOpen(true);
    })
    .catch((err) => {
      console.log(err);
      setIsPopupInfoTooltipIncorrectOpen(true);
    });
  }

  function handleLogin(email, password) {
    apiAuth.authorize(email, password)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        checkToken();
      }
    })
    .catch((err) => {
      console.log(err);
      setIsPopupInfoTooltipIncorrectOpen(true);
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsDeletePlacePopupOpen(false);

    setIsPopupInfoTooltipCorrectOpen(false);
    setIsPopupInfoTooltipIncorrectOpen(false);

    setSelectedCard(null);
  }

  function handleUpdateUser(newUserData) {
    api.patchUserInfo(newUserData)
    .then((result) => {
      setCurrentUser(result);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateAvatar(newAvatarData) {
    api.patchAvatar(newAvatarData)
    .then((result) => {
      setCurrentUser(result);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then((result) => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleAddPlaceSubmit(newCard) {
    api.postNewCard(newCard)
    .then((result) => {
      setCards([result, ...cards]);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleLogout() {
    localStorage.removeItem("token");
  }


  return (

    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header userEmail={authInfo.data?.email} onLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<ProtectedRouteElement loggedIn={loggedIn} element={Main} navigateTo="/sign-in"
                                    cards={cards}
                                    onEditAvatar={handleEditAvatarClick}
                                    onEditProfile={handleEditProfileClick}
                                    onAddPlace={handleAddPlaceClick}
                                    onCardClick={handleCardClick}
                                    onCardLike={handleCardLike}
                                    onCardDelete={handleCardDelete} />} />
          <Route path="/sign-up" element={<Register onSubmit={handleRegister} />} />
          <Route path="/sign-in" element={<Login onSubmit={handleLogin} />} />
        </Routes>
        
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

        <PopupInfoTooltip isOpen={isPopupInfoTooltipCorrectOpen} onClose={closeAllPopups} title={"Вы успешно зарегистрированы!"} image={correct} />
        <PopupInfoTooltip isOpen={isPopupInfoTooltipIncorrectOpen} onClose={closeAllPopups} title={"Что-то пошло не так! Попробуйте ещё раз."} image={incorrect} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Footer />
      </CurrentUserContext.Provider>
    </div>

  );
}

export default App;
