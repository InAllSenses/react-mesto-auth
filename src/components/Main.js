import React from "react";

import Card from "./Card";

import api from "../utils/Api"

import { CurrentUserContext } from "../contexts/CurrentUserContext";



function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  
  React.useEffect(() => {
    api.getInitialCards()
    .then((data) => {
      setCards(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  }, []);


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


  return (
    <main>
      <section className="profile page__profile">
        <div className="profile__avatar">
          <button
            type="button"
            className="profile__avatar-edit clickable-button"
            onClick={props.onEditAvatar}
          ></button>
          <img className="profile__image" src={currentUser.avatar} alt="аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit clickable-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add clickable-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <div className="elements page__elements">
        <ul className="elements__grid">
          {cards.map((item, i) => (
            <Card key={item._id} data={item} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
