import React from "react";
import avatar from "../images/avatar.png";

import { selectors, classes } from "../utils/constants";

import api from "../utils/Api"
import Card from "./Card";


function Main(props) {

  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState("Исследователь океана");
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);

  
  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .then(() => {
      return api.getInitialCards();
    })
    .then((data) => {
      setCards(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  }, []);




  return (
    <main>
      <section className="profile page__profile">
        <div className="profile__avatar">
          <button
            type="button"
            className="profile__avatar-edit clickable-button"
            onClick={props.onEditAvatar}
          ></button>
          <img className="profile__image" src={userAvatar} alt="аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              className="profile__edit clickable-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
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
            <Card data={item} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
