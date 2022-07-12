import React, { useEffect, useState } from 'react';

import Api from '../utils/Api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import Footer from './Footer';
import ImagePopup from './ImagePopup';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [cardsArray, setCards] = useState([]);
  
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '' })
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleUpdateUser(data) {
    Api.setUserData(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
  }

  function handleUpdateAvatar(data) {
    Api.setUserAvatar(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
  }

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

  function handleAddPlaceSubmit(data) {
    Api.sendCard(data)
      .then((newCard) => {
        setCards([newCard, ...cardsArray]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    Api.getInitialData()
      .then((data) => {
        const [userInfo, cardsData] = data;
        setCards(cardsData);
        setCurrentUser(userInfo);
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        cardsArray={cardsArray}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />
      
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;