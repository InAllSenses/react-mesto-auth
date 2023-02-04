import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import React from "react";

import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
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

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="input-name"
          type="text"
          name="field-name"
          className="popup__input popup__input_type_name"
          placeholder="Имя"
          minlength="2"
          maxlength="40"
          required
        />
        <span className="popup__input-error input-name-error"></span>
        <input
          id="input-profession"
          type="text"
          name="field-profession"
          className="popup__input popup__input_type_profession"
          placeholder="Профессия"
          minlength="2"
          maxlength="200"
          required
        />
        <span className="popup__input-error input-profession-error"></span>
      </PopupWithForm>

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
          minlength="2"
          maxlength="30"
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

      <div className="popup popup-delete">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close clickable-button"
          ></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button
            type="button"
            className="popup__button popup__button_delete clickable-button"
          >
            Да
          </button>
        </div>
      </div>

      <div className="popup popup-image">
        <figure className="popup-image__container">
          <button
            type="button"
            className="popup__close popup-image__close clickable-button"
          ></button>
          <img
            className="popup-image__picture"
            src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
            alt="картинка не загрузилась"
          />
          <figcaption className="popup-image__title">подпись</figcaption>
        </figure>
      </div>

      <div className="popup popup-avatar">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close popup-avatar__close clickable-button"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="id-information" className="popup__information" novalidate>
            <input
              id="input-avatar"
              type="url"
              name="field-avatar"
              className="popup__input popup__input_type_avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error input-avatar-error"></span>
            <button
              type="submit"
              className="popup__button popup__button_avatar clickable-button"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
