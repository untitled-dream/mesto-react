import React, { useState } from 'react';
import "../App.css";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState('');

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
        setSelectedCard('')
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
            title="Редактировать профиль"
            name="profile-edit"
            buttonText="Сохранить"
        />
        <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            title="Новое место"
            name="card-add"
            buttonText="Создать"
        />
        <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            title="Обновить аватар"
            name="avatar-update"
            buttonText="Сохранить"
        />

        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
        />
        </>
    );
}

export default App;