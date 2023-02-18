

function PopupInfoTooltip(props) {
  const popupVisibleClass = "popup_opened";

  return (
    <div className={`popup popup-${props.name} ${ props.isOpen ? popupVisibleClass : "" }`}>
      <div className="popup__container popup-infotooltip__container">
        <button
          type="button"
          className="popup__close clickable-button"
          onClick={props.onClose}
        ></button>
        <img className="popup-infotooltip__result" src={props.image} alt="" />
        <h1 className="popup-infotooltip__text">
          {props.title}
        </h1>
      </div>
    </div>
  );
}

export default PopupInfoTooltip;
