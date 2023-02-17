import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
        <Routes>
    <Route path={"/sign-up"} element={<NavLink to="/sign-in" className="header__status">Войти</NavLink> } />
    <Route path={"/sign-in"} element={<NavLink to="/sign-up" className="header__status">Регистрация</NavLink> } />
    <Route path={"/"} element={<NavLink to="/" className="header__status">Выйти</NavLink> } />
        </Routes>
    </nav>

  );
}

export default NavBar;