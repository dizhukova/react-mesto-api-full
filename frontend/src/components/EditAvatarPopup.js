import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
    const inputRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: inputRef.current.value,
        });
    }

    return (
        <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input className="popup__input popup__input_type_avatar-link" ref={inputRef} type="url" id="avatar-input" name="avatar-link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;