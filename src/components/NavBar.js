import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";

function NavBar(props) {
  return (
    <nav>
      <Routes>
        <Route path={"/sign-up"} element={
            <NavLink to="/sign-in" className="header__status">
              Войти
            </NavLink>
          } />
        <Route path={"/sign-in"} element={
            <NavLink to="/sign-up" className="header__status">
              Регистрация
            </NavLink>
          } />
        <Route path={"/"} element={
            <div className="header__logged">
              <p className="header__status">{props.userEmail}</p>
              <NavLink to="/sign-in" className="header__status" onClick={props.onLogout} >Выйти</NavLink>
            </div>
          } />
      </Routes>
    </nav>
  );
}

export default NavBar;
