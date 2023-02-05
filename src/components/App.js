import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import React from "react";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  

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

  return (
    <div className="page">
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
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error input-name-error"></span>
        <input
          id="input-profession"
          type="text"
          name="field-profession"
          className="popup__input popup__input_type_profession"
          placeholder="Профессия"
          minLength="2"
          maxLength="200"
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
    </div>
  );
}

export default App;
