function Register(props) {

  return (
    <main>
      <div className="sign-form">
        <div className="sign-form__container">
          <h1 className="sign-form__title">Регистрация</h1>
          
          <form className="sign-form__info">Email</form>
          <form className="sign-form__info">Пароль</form>
          
          <button className="sign-form__up">Зарегистрироваться</button>
          <p className="sign-form__in">Уже зарегистрированы? Войти</p>
        </div>
      </div>
    </main>
  );
}

export default Register;
