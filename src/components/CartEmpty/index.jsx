import React from "react";
import "./CartEmpty.scss";
import "../../styles/basic.scss";
import {Link} from "react-router-dom";

const CartEmptyBlock = () => {
    return (
        <section className="cart-is-empty-block">
            <div className="container">
                <div className="cart cart__container">
                    <div className="cart-is-empty">
                        <div className="cart-is-empty__title">
                            Корзина пустая &#129300;
                        </div>
                        <p className="cart-is-empty__description">Вероятней всего, вы не заказывали ещё пиццу.
                            Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                        <div className="cart-is-empty__img">
                            <img src={require("../../images/shopping-cart.png")} alt="pizza"/>
                        </div>
                        <Link to={process.env.PUBLIC_URL + '/'}>
                            <button className="cart-is-empty__back">Вернуться назад</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartEmptyBlock;