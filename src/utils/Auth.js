class ApiAuth {
    constructor(baseUrl) {
      this._baseUrl = baseUrl;
    }
  
    _handleFetchResult(res) {
      if (res.ok) {
        return res.json();
      }
      
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    register(email, password) {
      return fetch(`${this._baseUrl}/signup`, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "password": password,
          "email": email
        })
      })
      .then(this._handleFetchResult);
    }
  
    authorize(email, password) {
      return fetch(`${this._baseUrl}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "password": password,
          "email": email
        })
      })
      .then(this._handleFetchResult)
    }
  
    checkToken(token) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${token}`
        }
      })
      .then(this._handleFetchResult);
    }
  
  }

const apiBaseUrlAuth = "https://auth.nomoreparties.co";
const apiAuth = new ApiAuth(apiBaseUrlAuth);

export default apiAuth ; 