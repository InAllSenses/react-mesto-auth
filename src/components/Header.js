import logo from "../images/logo.svg";

function Header() {
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="логотип" />
            <p className="header__status">Войти</p>
        </header>
    );
}

export default Header;


