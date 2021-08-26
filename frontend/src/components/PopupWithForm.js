import React from 'react';
import LoaderDots from './LoaderDots.js';

function PopupWithForm(props) {
    return (
        <article className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
            <div className={`popup__container popup__container_type_${props.name}`}>
                <h3 className="popup__title">{props.title}</h3>
                <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
                <form className="popup__form" name={props.name} onSubmit={props.onSubmit}>
                    <fieldset className="popup__form-field">
                        {props.children}
                        <button className="popup__submit-button" type="submit" name='submit' aria-label="Сохранить">{props.buttonText}
                            <LoaderDots />
                        </button>
                    </fieldset>
                </form>
            </div>
        </article>
    )
}

export default PopupWithForm;