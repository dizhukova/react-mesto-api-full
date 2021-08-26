import React from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-box">
                        <img className="profile__avatar" src={currentUser.avatar} alt="Аватар профиля" />
                        <button className="profile__avatar-edit" type="button" aria-label="Редактировать" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-box">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__profession">{currentUser.about}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="photos">
                <ul className="cards">
                    {props.cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main;