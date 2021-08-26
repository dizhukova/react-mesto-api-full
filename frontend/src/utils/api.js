class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    setUserInfo({name, about}) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: `${name}`,
                about: `${about}`
            })
        })
            .then(this._checkResponse);
    }

    editAvatar({ avatar }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: `${avatar}`
            })
        })
            .then(this._checkResponse);
    }

    addCard({ name, link }) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: `${name}`,
                link: `${link}`
            })
        })
            .then(this._checkResponse);
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    likeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    unlikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    changeLikeCardStatus(cardId, isLiked) {
        if(isLiked) {
            return this.likeCard(cardId);
        } else {
            return this.unlikeCard(cardId);
        }
    }
}

const api = new Api({
    baseUrl: 'https://nomoreparties.co/v1/cohort-24',
    headers: {
        authorization: '0bfe8642-03b6-4f4d-92cc-535741de9ca8',
        'Content-Type': 'application/json'
    }
});

export default api;
