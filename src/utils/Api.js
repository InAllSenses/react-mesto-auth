class Api {
  constructor(token, baseUrl) {
    this._token = token;
    this._baseUrl = baseUrl;

    this._headers = {
      authorization: this._token,
      "Content-Type": "application/json",
    };
  }

  _handleFetchResult(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._handleFetchResult);
  }

  getUserInfo() {
    return this._request(this._baseUrl + "/users/me", {
      method: "GET",
      headers: this._headers,
    });
  }

  patchUserInfo({ name, about }) {
    return this._request(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    });
  }

  patchAvatar({ avatar }) {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      })
    });
  }

  getInitialCards() {
    return this._request(this._baseUrl + "/cards", {
      method: "GET",
      headers: this._headers,
    });
  }

  postNewCard({ name, link }) {
    return this._request(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  deleteCard(cardId) {
    return this._request(this._baseUrl + "/cards/" + cardId, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  putLike(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  deleteLike(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  changeLikeCardStatus(cardId, newStatus) {
    if (newStatus) {
      return this.putLike(cardId);
    }
    else {
      return this.deleteLike(cardId);
    }
  }
}


// INITIALIZATION
const apiToken = "1131d0bd-5b8f-45fb-8061-570667973a92";
const apiBaseUrl = "https://mesto.nomoreparties.co/v1/cohort-50";

const api = new Api(apiToken, apiBaseUrl);

export default api;