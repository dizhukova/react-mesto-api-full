import React from 'react';

function ImagePopup(props) {
    return (
        <article className={`popup popup_type_open-image ${props.card.link ? "popup_opened" : ""}`}>  
            <div className="popup__container popup__container_open-image">
                <button className="popup__close-button" type="button" aria-label="Закрыть" id="image_close-button" onClick={props.onClose}></button>
                <figure className="popup__image-box">
                    <img className="popup__image" src={props.card.link} alt={props.card.name} />
                    <figcaption className="popup__caption">{props.card.name}</figcaption>
                </figure>
            </div>
        </article>
    )
}

export default ImagePopup;
