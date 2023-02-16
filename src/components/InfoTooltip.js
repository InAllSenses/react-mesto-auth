import correct from "../images/correct.svg";

function PopupInfoTooltip(props) {
  const popupVisibleClass = "popup_opened";

  return (
    <div className="popup popup-infotooltip">
      <div className="popup__container popup-infotooltip__container">
        <button
          type="button"
          className="popup__close clickable-button"
          onClick={props.onClose}
        ></button>
        <img className="popup-infotooltip__result" src={correct} alt="" />
        <h1 className="popup-infotooltip__text">
          Вы успешно зарегистрировались!
        </h1>
      </div>
    </div>
  );
}

export default PopupInfoTooltip;
