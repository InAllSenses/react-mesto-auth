function PopupWithForm({name, title, children, onClose, onSubmit, isLoading, isOpen, buttonTitle}) {
  const popupVisibleClass = "popup_opened";

  return (
    <div className={`popup popup-${name} ${ isOpen ? popupVisibleClass : "" }`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close clickable-button"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form name={`form-${name}`} className="popup__information" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__button clickable-button">
            {isLoading ? "Сохранение..." : buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
