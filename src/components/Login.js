import React from "react";

function Login(props) {
   
  return (
<main>
<div className="sign-form">
    <div className="sign-form__container">
        <h1 className="sign-form__title">Войти</h1>
        <form>
            <label>
          <input required id="email" name="email" type="email" placeholder="Email" className="sign-form__info" />
          </label>
          <label>
          <input required id="password" name="password" type="password" placeholder="Пароль" className="sign-form__info" />
          </label>
          </form>
        <button type="submit" className="sign-form__up" onClick={props.onLoginClick}>Войти</button>
    </div>
</div>
</main>
  );
}

export default Login;