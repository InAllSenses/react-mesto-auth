import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";

import api from "../utils/Api";

import avatar from "../images/avatar.png";

import { CurrentUserContext } from "../contexts/CurrentUserContext";



function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({
    name: "Жак-Ив Кусто",
    about: "Исследователь океана",
    avatar: avatar
  });

  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setCurrentUser(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  

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

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsDeletePlacePopupOpen(false);
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

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonTitle="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="input-avatar"
            type="url"
            name="field-avatar"
            className="popup__input popup__input_type_avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error input-avatar-error"></span>
        </PopupWithForm>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <PopupWithForm
          name="add"
          title="Новое место"
          buttonTitle="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="input-place"
            type="text"
            name="field-title"
            className="popup__input popup__input_type_title"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error input-place-error"></span>
          <input
            id="input-url"
            type="url"
            name="field-link"
            className="popup__input popup__input_type_link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error input-url-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          buttonTitle="Да"
          isOpen={isDeletePlacePopupOpen}
          onClose={closeAllPopups}
        >
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
