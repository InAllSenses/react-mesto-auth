function PopupWithForm(props) {
  const popupVisibleClass = "popup_opened";

  return (
    <div className={`popup popup-${props.name} ${ props.isOpen ? popupVisibleClass : "" }`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close clickable-button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form name="id-information" className="popup__information" onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className="popup__button clickable-button">
            {props.buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
