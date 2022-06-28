import React, { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
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

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title='Редактировать профиль'
        name='profile-edit'
        buttonText='Сохранить'
      >
        <label className='form__field'>
          <input className='form__input' id='name' name='name' minLength='2' maxLength='40' placeholder='Имя' autoComplete='off' required />
          <span className='form__input-error name-error'></span>
        </label>
        <label className='form__field'>
          <input className='form__input' id='about' name='about' minLength='2' maxLength='200' placeholder='О себе' autoComplete='off' required />
          <span className='form__input-error about-error'></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title='Новое место'
        name='card-add'
        buttonText='Создать'
      >
        <label className='form__field'>
          <input className='form__input' id='place' name='place' minLength='2' maxLength='30' placeholder='Название' autoComplete='off' required />
          <span className='form__input-error place-error'></span>
        </label>
        <label className='form__field'>
          <input className='form__input' id='link' name='link' type='url' placeholder='Ссылка на картинку' autoComplete='off' required />
          <span className='form__input-error link-error'></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title='Обновить аватар'
        name='avatar-update'
        buttonText='Сохранить'
      >
        <label className='form__field'>
          <input className='form__input' id='avatar' name='avatar' type='url' placeholder='Ссылка на фотографию' autoComplete='off' required />
          <span className='form__input-error avatar-error'></span>
        </label>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;