import correct from "../images/correct.svg";

function PopupInfoTooltip(props) {
  const popupVisibleClass = "popup_opened";

  return (
    <div className="popup popup-infoTooltip popup_opened">
      <div className="popup__container popup-infoTooltip__container">
        <button
          type="button"
          className="popup__close popup-infoTooltip__close"
        ></button>
        <img className="popup-infoTooltip__result" src={correct} alt="" />
        <h1 className="popup-infoTooltip__text">
          Вы успешно зарегистрировались!
        </h1>
      </div>
    </div>
  );
}

export default PopupInfoTooltip;
