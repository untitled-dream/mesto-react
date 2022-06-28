function PopupWithForm(props) {
    return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`} id={props.name}>
      <div className='popup__container'>
        <form className='form' id={props.name + '-form'} name={props.name + '-form'}>
          <fieldset className='form__fieldset'>
            <h2 className='form__title'>{props.title}</h2>
              
            {props.name === 'profile-edit' && 
              <div className='form__input-wrapper'>
                <label className='form__field'>
                  <input className='form__input' id='name' name='name' minLength='2' maxLength='40' placeholder='Имя' autoComplete='off' required />
                  <span className='form__input-error name-error'></span>
                </label>
                <label className='form__field'>
                  <input className='form__input' id='about' name='about' minLength='2' maxLength='200' placeholder='О себе' autoComplete='off' required />
                  <span className='form__input-error about-error'></span>
                </label>
              </div>
            }
            {props.name === 'card-add' && 
              <div className='form__input-wrapper'>
                <label className='form__field'>
                  <input className='form__input' id='place' name='place' minLength='2' maxLength='30' placeholder='Название' autoComplete='off' required />
                  <span className='form__input-error place-error'></span>
                </label>
                <label className='form__field'>
                  <input className='form__input' id='link' name='link' type='url' placeholder='Ссылка на картинку' autoComplete='off' required />
                  <span className='form__input-error link-error'></span>
                </label>
              </div>
            }
            {props.name === 'avatar-update' &&
              <div className='form__input-wrapper'>
                <label className='form__field'>
                  <input className='form__input' id='avatar' name='avatar' type='url' placeholder='Ссылка на фотографию' autoComplete='off' required />
                  <span className='form__input-error avatar-error'></span>
                </label>
              </div>
            }
            <button className='form__button-submit' type='submit' title='Сохранить изменения'>{props.buttonText}</button>
          </fieldset>
        </form>
        <button className='popup__button-close' onClick={props.onClose} type='button' title='Закрыть форму'></button>
      </div>
    </div>
  );
}

export default PopupWithForm;