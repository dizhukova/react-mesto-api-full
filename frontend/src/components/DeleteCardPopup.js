import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function DeleteCardPopup() {
    return (
        <PopupWithForm name="delete-card" title="Вы уверены?" buttonText="Да">

        </PopupWithForm>
    )
}

export default DeleteCardPopup;