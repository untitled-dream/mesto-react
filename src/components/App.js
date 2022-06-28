import React from 'react';

import "../App.css";

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

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

  }

  return (
    <>
      <Header/>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer/>
      
      <PopupWithForm 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title="Редактировать профиль"
        name="profile-edit"
      />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title="Новое место"
        name="card-add"
      />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title="Обновить аватар"
        name="avatar-update"
        />
      
      <ImagePopup />
      
      <div className="popup popup_dark-background" id="card-view">
        <figure className="popup__figure">
          <img className="popup__image" id="card-image" src="data:," alt="Название"/>
          <button className="popup__button-close" type="button" title="Закрыть форму"></button>
          <figcaption className="popup__caption">
            <h2 className="popup__caption-text" id="card-place"></h2>
            <p className="popup__caption-text" id="card-author"></p>
          </figcaption>
        </figure>
      </div>
      <div className="popup" id="card-delete-confirmation">
        <div className="popup__container">
          <form className="form" id="confirmation-form" name="confirmation-form">
            <fieldset className="form__fieldset">
              <h2 className="form__title">Вы уверены?</h2>
              <button className="form__button-submit" type="submit" title="Подтвердить удаление">Да</button>
            </fieldset>
          </form>
          <button className="popup__button-close" type="submit" title="Закрыть форму"></button>
        </div>
      </div>
      <template id="card-template">
        <li className="elements__card">
          <img className="elements__image"/>
          <div className="elements__title-wrapper">
            <h2 className="elements__title"></h2>
            <div className="elements__like-container">
              <button className="elements__like-button" type="button"></button>
              <span className="elements__like-counter">0</span>
            </div>
          </div>
          <button className="elements__trash-button" type="button" title="Удалить запись"></button>
        </li>
      </template>
    </>
  );
}

export default App;