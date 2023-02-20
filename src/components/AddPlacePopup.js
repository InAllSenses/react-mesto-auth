import React from "react";

import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");

    function handleChangeName(event) {
        setName(event.target.value);
    }

    function handleChangeLink(event) {
        setLink(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        props.onAddPlace({
            name,
            link
        });
    }

    React.useEffect(() => {
        setName("");
        setLink("");
    }, [props.isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonTitle="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
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
        value={name}
        onChange={handleChangeName}
      />
      <span className="popup__input-error input-place-error" />
      <input
        id="input-url"
        type="url"
        name="field-link"
        className="popup__input popup__input_type_link"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={handleChangeLink}
      />
      <span className="popup__input-error input-url-error" />
    </PopupWithForm>
  );
}
