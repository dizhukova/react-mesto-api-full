import React from 'react';
import { Link, Route } from 'react-router-dom';
import headerLogo from '../images/logo.svg';

function Header(props) {
    return (
        <header className="header">
            {props.loggedIn &&
                <div className="header__auth-info">
                    <p className="header__email">{props.email}</p>
                    <button className="header__log-out" type="submit" name="submit" onClick={props.onLogOut}>Выйти</button>
                </div>
            }
            <a href="#" target="_blank">
                <img className="header__logo" src={headerLogo} alt="Логотип Mesto" />
            </a>
            <Route path="/sign-up">
                <Link className="header__auth-button" to="sign-in">Войти</Link>
            </Route>
            <Route path="/sign-in">
                <Link className="header__auth-button" to="sign-up">Регистрация</Link>
            </Route>
        </header>
    )
}

export default Header;

