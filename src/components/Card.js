export default function Card(props) {
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
      <button className="element__trashcan clickable-button"></button>
      <div className="element__caption">
        <h2 className="element__title">{props.data.name}</h2>
        <div className="element__like">
          <button
            type="button"
            className="element__heart clickable-button"
          ></button>
          <p className="element__like-count">{props.data.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
