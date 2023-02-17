import logo from "../images/logo.svg";
import React from 'react';
import NavBar from "./NavBar";

function Header() {
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="логотип" />
            <NavBar></NavBar>
        </header>
    );
}

export default Header;


