import React from "react";

import PopupWithForm from "./PopupWithForm";

import { CurrentUserContext } from "../contexts/CurrentUserContext";


export default function EditProfilePopup(props) {
    const [name, setName] = React.useState("");

    function onChangeName(event) {
        setName(event.target.value);
    }

    const [description, setDescription] = React.useState("");

    function onChangeDescription(event) {
        setDescription(event.target.value);
    }

    const currentUser = React.useContext(CurrentUserContext);
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    function handleSubmit(event) {
        event.preventDefault();

        props.onUpdateUser({
            name,
            about: description
        });
    }


  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonTitle="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
        onChange={onChangeName}
        value={name}
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
        onChange={onChangeDescription}
        value={description}
      />
      <span className="popup__input-error input-profession-error"></span>
    </PopupWithForm>
  );
}
