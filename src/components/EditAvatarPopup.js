import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  const avatar = useRef('');

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: avatar.current.value
    })

    avatar.current.value = '';
  } 

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      title='Обновить аватар'
      name='avatar-update'
      buttonText='Сохранить'
    >
      <label className='form__field'>
        <input
          className='form__input'
          id='avatar'
          name='avatar'
          type='url'
          placeholder='Ссылка на фотографию'
          autoComplete='off'
          ref={avatar}
          defaultValue=''
          required
        />
        <span className='form__input-error avatar-error'></span>
      </label>
    </PopupWithForm>
  )
}
export default EditAvatarPopup;