function Main(props) {

    return (
    <>
    <main className="content">
        <section className="profile">
          <div className="profile__avatar-wrapper">
            <img className="profile__avatar" alt=""/>
            <button className="profile__button-avatar" type="button" onClick={props.onEditAvatar} title="Обновить фотографию"></button>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name"></h1>
              <button className="profile__button-edit" type="button" onClick={props.onEditProfile} title="Редактировать профиль"></button>
            </div>
            <p className="profile__description"></p>
          </div>
          <button className="profile__button-add" type="button" onClick={props.onAddPlace} title="Добавить фотографию"></button>
        </section>
        <section className="elements">
          <ul className="elements__list"></ul>
        </section>
      </main>
    </>
    );
}

export default Main;