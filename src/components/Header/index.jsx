import React from "react";
import "./Header.scss";
import "../../styles/basic.scss";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header-block">
            <div className="container header_radius">
                <div className="header">
                    <div className="header__title-block">
                        <Link to="/">
                            <div className="header__logo"> </div>
                        </Link>

                        <div>
                            <h1 className="header__title">REACT PIZZA</h1>
                            <div className="header__subtitle">Cамая вкусная пицца во вселенной</div>
                        </div>
                    </div>
                    <Link to="/order">
                        <button className="header__button">
                            <span className="header__price">520 ₽</span>
                            <span className="header__cart"><i className="fa-solid fa-cart-shopping"> </i>3</span>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;