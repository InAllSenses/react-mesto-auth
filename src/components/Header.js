import logo from "../images/logo.svg";
import React from 'react';
import NavBar from "./NavBar";

function Header(props) {
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="логотип" />
            <NavBar userEmail={props.userEmail} onLogout={props.onLogout} />
        </header>
    );
}

export default Header;


