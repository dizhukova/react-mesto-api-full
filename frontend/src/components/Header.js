/* eslint-disable jsx-a11y/anchor-is-valid */
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
            <Route path="/signup">
                <Link className="header__auth-button" to="signin">Войти</Link>
            </Route>
            <Route path="/signin">
                <Link className="header__auth-button" to="signup">Регистрация</Link>
            </Route>
        </header>
    )
}

export default Header;

