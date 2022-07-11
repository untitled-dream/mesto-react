import React, { useState, useEffect, useContext } from 'react';

import Card from './Card';
import Api from '../utils/Api'

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = useContext(CurrentUserContext);

  const [cardsArray, setCards] = useState([]);

  useEffect(() => {
    Api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err))
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    Api.changeLikeCardStatus(card._id, !isLiked)
      .then((card) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? card : currentCard));
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {  
    Api.removeCard(card._id)
      .then(() => {
        const newCardsArray = cardsArray.filter(item => item !== card);
        setCards(newCardsArray);
      })
      .catch((err) => console.log(err));
  }

  return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-wrapper'>
          <img className='profile__avatar' src={currentUser.avatar} alt={currentUser.name} />
          <button className='profile__button-avatar' type='button' onClick={props.onEditAvatar} title='Обновить фотографию'></button>
        </div>
        <div className='profile__info'>
          <div className='profile__container'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <button className='profile__button-edit' type='button' onClick={props.onEditProfile} title='Редактировать профиль'></button>
          </div>
          <p className='profile__description'>{currentUser.about}</p>
        </div>
        <button className='profile__button-add' type='button' onClick={props.onAddPlace} title='Добавить фотографию'></button>
      </section>
      <section className='elements'>
        <ul className='elements__list'>
          {cardsArray.map(card => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          )
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main;