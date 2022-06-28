import React, {useState, useEffect} from 'react';
import Card from './Card';
import Api from '../utils/api'

function Main(props) {
    const [userName, getUserName] = useState('');
    const [userDescription, getUserDescription] = useState('');
    const [userAvatar, getUserAvatar] = useState('');
    const [initialCards, getInitialCards] = useState([]);

    useEffect(() => {
        Api.getInitialData()
        .then((data) => {
            const [userData, cardsData] = data;
            getUserName(userData.name);
            getUserDescription(userData.about);
            getUserAvatar(userData.avatar);
            getInitialCards(cardsData);
        })
        .catch((err) => console.log(err))
    }, [])

    return (
    <main className='content'>
      <section className='profile'>
        <div className='profile__avatar-wrapper'>
          <img className='profile__avatar' src={userAvatar} alt={userName}/>
          <button className='profile__button-avatar' type='button' onClick={props.onEditAvatar} title='Обновить фотографию'></button>
        </div>
        <div className='profile__info'>
          <div className='profile__container'>
            <h1 className='profile__name'>{userName}</h1>
            <button className='profile__button-edit' type='button' onClick={props.onEditProfile} title='Редактировать профиль'></button>
          </div>
          <p className='profile__description'>{userDescription}</p>
        </div>
        <button className='profile__button-add' type='button' onClick={props.onAddPlace} title='Добавить фотографию'></button>
      </section>
      <section className='elements'>
          <ul className='elements__list'>
            {initialCards.map(card =>
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
              />
            )}
          </ul>
      </section>
    </main>
  )
}

export default Main;