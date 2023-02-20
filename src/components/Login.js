import React from "react";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(email, password);
  }

  return (
    <main>
      <div className="sign-form">
        <div className="sign-form__container">
          <h1 className="sign-form__title">Войти</h1>
          <form onSubmit={handleSubmit} name="form-login">
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="sign-form__info"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              required
              id="password"
              name="password"
              type="password"
              placeholder="Пароль"
              className="sign-form__info"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit" className="sign-form__up">
              Войти
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
