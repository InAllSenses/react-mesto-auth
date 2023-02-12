import React from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";


export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.data.owner._id === currentUser._id;
  const isLiked = props.data.likes.some(like => like._id === currentUser._id);

  function handleCardClick() {
    props.onCardClick(props.data);
  }

  return (
    <li key={props.data._id} className="element">
      <img
        className="element__image clickable-button"
        src={props.data.link}
        alt="фото"
        onClick={handleCardClick}
      />
      {isOwn && <button className="element__trashcan clickable-button" />}
      <div className="element__caption">
        <h2 className="element__title">{props.data.name}</h2>
        <div className="element__like">
          <button
            type="button"
            className={`element__heart clickable-button ${isLiked ? "element__heart_active" : ""}`}
          ></button>
          <p className="element__like-count">{props.data.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
