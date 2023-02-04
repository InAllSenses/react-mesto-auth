function PopupWithForm(props) {



  return (
    <div className="popup {`popup_type_${props.name}`}">
      <div className="popup__container">
        <button
          type="button"
          className="popup__close clickable-button"
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form name="id-information" className="popup__information" novalidate>
          {props.children}
          <button
            type="submit"
            className="popup__button clickable-button"
          >
            {props.buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
