import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    useEffect(() => {
        setName('');
        setLink('');
    }, [props.isOpen]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            name: name,
            link: link
        });
    }


    return (
        <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} >
            <input className="popup__input popup__input_card_title" minLength="2" maxLength="30" type="text" id="title-input" name="card-name" placeholder="Название" value={name} onChange={handleNameChange} required />
            <span className="popup__input-error title-input-error"></span>
            <input className="popup__input popup__input_card_link" type="url" id="link-input" name="card-link" placeholder="Ссылка на картинку" value={link} onChange={handleLinkChange} required />
            <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;