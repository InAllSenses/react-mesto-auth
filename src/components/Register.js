import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
   
  return (
    <main>
      <div className="sign-form">
        <div className="sign-form__container">
          <h1 className="sign-form__title">Регистрация</h1>
          
          <form className="sign-form__info">Email</form>
          <form className="sign-form__info">Пароль</form>
          
          <button className="sign-form__up" onClick={props.onRegisterClick}>Зарегистрироваться</button>
          <p className="sign-form__in">Уже зарегистрированы?<Link to="/sign-in"> Войти</Link></p>
        </div>
      </div>
    </main>
  );
}

export default Register;
