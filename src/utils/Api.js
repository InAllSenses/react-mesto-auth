import { apiConstants } from "./constants"


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

  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      method: "GET",
      headers: this._headers,
    }).then(this._handleFetchResult);
  }

  patchUserInfo({ name, info }) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: info,
      }),
    }).then(this._handleFetchResult);
  }

  patchAvatar({ link }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      })
    }).then(this._handleFetchResult);
  }

  getInitialCards() {
    return fetch(this._baseUrl + "/cards", {
      method: "GET",
      headers: this._headers,
    }).then(this._handleFetchResult);
  }

  postNewCard({ name, link }) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._handleFetchResult);
  }

  deleteCard(cardId) {
    return fetch(this._baseUrl + "/cards/" + cardId, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleFetchResult);
  }

  putLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleFetchResult);
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleFetchResult);
  }
}



// INITIALIZATION
const api = new Api(apiConstants.token, apiConstants.baseUrl);

export default api;

// api
//   .getUserInfo()
//   .then((data) => {
//     // 1. set user info
//     userInfo.setUserInfo({
//       name: data.name,
//       info: data.about,
//     });

//     userInfo.setAvatar(data.avatar);
//     userInfo.setId(data._id);
//   })
//   .then(() => {
//     // 2. get cards
//     return api.getInitialCards();
//   })
//   .then((items) => {
//     // 3. make cards
//     cardsList.renderItems(items);
//   })
//   .catch((err) => {
//     console.log(err);
//   });