import React from "react";
import { Link } from "react-router-dom";
import * as auth from '../auth.js';

function Register(props) {
   
  return (
    <main>
      <div className="sign-form">
        <div className="sign-form__container">
          <h1 className="sign-form__title">Регистрация</h1>
          <form>
            <label>
          <input required id="email" name="email" type="email" placeholder="Email" className="sign-form__info" />
          </label>
          <label>
          <input required id="password" name="password" type="password" placeholder="Пароль" className="sign-form__info" />
          </label>
          </form>
          <button type="submit" className="sign-form__up" onClick={props.onRegisterClick}>Зарегистрироваться</button>
          <p className="sign-form__in">Уже зарегистрированы?<Link className="sign-form__link" to="/sign-in"> Войти</Link></p>
        </div>
      </div>
    </main>
  );
}

export default Register;
