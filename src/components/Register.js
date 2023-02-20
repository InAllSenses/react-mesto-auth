import React from "react";
import { Link } from "react-router-dom";

function Register(props) {

const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");

function handleEmailChange(e) {
    setEmail(e.target.value);
}

function handlePasswordChange(e) {
    setPassword(e.target.value);
}

function handleSubmitForm(e) {
    e.preventDefault();
    props.onSubmit(email, password);
}

  return (
    <main>
      <div className="sign-form">
        <div className="sign-form__container">
          <h1 className="sign-form__title">Регистрация</h1>
          <form onSubmit={handleSubmitForm} name="form-register">
            <input required id="email" name="email" type="email" placeholder="Email" className="sign-form__info" value={email} onChange={handleEmailChange} />
            <input required id="password" name="password" type="password" placeholder="Пароль" className="sign-form__info" value={password} onChange={handlePasswordChange} />
            <button type="submit" className="sign-form__up">Зарегистрироваться</button>
          </form>
          <p className="sign-form__in">Уже зарегистрированы?<Link className="sign-form__link" to="/sign-in"> Войти</Link></p>
        </div>
      </div>
    </main>
  );

}


export default Register;
