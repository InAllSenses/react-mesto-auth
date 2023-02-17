export const BASE_URL = 'https://api.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "email": email,
        "password": password})
  })
  .then((response) => {
    try {
        if (response.status === 200){
    return response.json();
}
  } catch(e) {
    return(e)
  }
})
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};