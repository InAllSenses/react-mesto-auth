import avatar from "../images/avatar.png";

import { selectors, classes } from "../utils/constants";


function handleEditAvatarClick() {
  const popupElement = document.querySelector(selectors.popupEditAvatar);
  popupElement.classList.add(classes.popupVisible);
}

function handleEditProfileClick() {
  const popupElement = document.querySelector(selectors.popupEditUser);
  popupElement.classList.add(classes.popupVisible);
}

function handleAddPlaceClick() {
  const popupElement = document.querySelector(selectors.popupMakeCard);
  popupElement.classList.add(classes.popupVisible);
}

function Main() {
  return (
    <main>
      <section className="profile page__profile">
        <div className="profile__avatar">
          <button
            type="button"
            className="profile__avatar-edit clickable-button"
            onClick={handleEditAvatarClick}
          ></button>
          <img className="profile__image" src={avatar} alt="аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              type="button"
              className="profile__edit clickable-button"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button
          type="button"
          className="profile__add clickable-button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <div className="elements page__elements">
        <ul className="elements__grid">
          <template className="template__element">
            <li className="element">
              <img className="element__image clickable-button"
                src="<%=require('./images/castle.png')%>"
                alt="замок на горе" />
              <button className="element__trashcan clickable-button"></button>
              <div className="element__caption">
                <h2 className="element__title"></h2>
                <div className="element__like">
                  <button
                    type="button"
                    className="element__heart clickable-button"
                  ></button>
                  <p className="element__like-count">0</p>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </main>
  );
}

export default Main;
