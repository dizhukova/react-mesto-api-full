import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner === currentUser._id;
    const cardDeleteButtonClassName = (
        `card__delete-button ${isOwn ? '' : 'card__delete-button_hidden'}`
    );

    const isLiked = props.card.likes.some(i => i === currentUser._id);
    const cardLikeButtonClassName = (
        `card__like-button ${isLiked ? 'card__like-button_active' : ''}`
    );

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return (
        <li className="card">
            <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" onClick={handleDeleteClick}></button>
            <div className="card__caption">
                <h2 className="card__name">{props.card.name}</h2>
                <div className="card__like-box">
                    <button className={cardLikeButtonClassName} type="button" aria-label="Нравится" onClick={handleLikeClick}></button>
                    <p className="card__like-number">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;