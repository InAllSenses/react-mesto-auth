function ImagePopup(props) {
  const popupVisibleClass = "popup_opened";

  return (
    <div className={`popup popup-image ${props.card ? popupVisibleClass : ""}`}>
      <figure className="popup-image__container">
        <button
          type="button"
          className="popup__close popup-image__close clickable-button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup-image__picture"
          src={props.card && props.card.link}
          alt="картинка не загрузилась"
        />
        <figcaption className="popup-image__title">
          {props.card && props.card.name}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
