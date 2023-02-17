import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="header__status">
    {/* {
        isLogin ? (<NavLink to="/Login" className="menu__link">Войти</NavLink>) :
        isRegister ? (<NavLink to="/Register" className="menu__link">Регистрация</NavLink>) :
        (<NavLink to="/" className="menu__link">Выйти</NavLink>)
    } */}
    <NavLink to="/sign-in" className="menu__link">Войти</NavLink>
    <NavLink to="/sign-up" className="menu__link">Регистрация</NavLink>
    <NavLink to="/" className="menu__link">Выйти</NavLink>
</nav>
  );
}

export default NavBar;