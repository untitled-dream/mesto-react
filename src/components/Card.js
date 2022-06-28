import React from 'react';
function Card(props) {
    function handleCardClick() {
        props.onCardClick(props.card)
    }
    return (
    <li className="elements__card">
        <img className="elements__image" src={`${props.card.link}`} alt={`${props.card.name}`} onClick={handleCardClick}/>
        <div className="elements__title-wrapper">
            <h2 className="elements__title">{props.card.name}</h2>
            <div className="elements__like-container">
                <button className="elements__like-button" type="button"></button>
                <span className="elements__like-counter">{props.card.likes.length}</span>
            </div>
        </div>
        <button className="elements__trash-button" type="button" title="Удалить запись"></button>
    </li>
  );
}
export default Card;