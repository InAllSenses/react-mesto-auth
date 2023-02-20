import React from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const avatarRef = React.useRef();

    React.useEffect(() => {
      avatarRef.current.value = "";
    }, [props.isOpen]);

    function handleSubmit(event) {
        event.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonTitle="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
    >
      <input
        id="input-avatar"
        type="url"
        name="field-avatar"
        className="popup__input popup__input_type_avatar"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
        defaultValue={currentUser.avatar}
      />
      <span className="popup__input-error input-avatar-error" />
    </PopupWithForm>
  );
}
