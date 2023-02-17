import React from "react";

function Login(props) {
   
  return (
<main>
<div className="sign-form">
    <div className="sign-form__container">
        <h1 className="sign-form__title">Войти</h1>
        <form className="sign-form__info">Email</form>
        <form className="sign-form__info">Пароль</form>
    <button className="sign-form__up">Войти</button>
    </div>
</div>
</main>
  );
}

export default Login;