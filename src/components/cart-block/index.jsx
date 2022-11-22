import React from "react";
import "./cartBlock.scss";
import "../../styles/basic.scss";

const CartBlock = () => {
    return (
        <section className="cart-block">
            <div className="container">
                <div className="cart cart__container">
                    <div className="cart__title-block">
                        <div className="cart__title"><i className="fa-solid fa-cart-shopping"> </i>Корзина</div>
                        <div className="cart__trash"><i className="fa-regular fa-trash-can"> </i>Очистить корзину</div>
                    </div>
                    <div className="cart-items">
                        <div className="cart-item">
                            <div className="width-block">
                                <div className="cart-item__img">
                                    <img src={require("../../images/pizza-chicken.png")} alt="pizza"/>
                                </div>
                                <div className="cart-item__title">
                                    <h3>Сырный цыпленок</h3>
                                    <span>тонкое тесто, 26 см.</span>
                                </div>
                            </div>
                            <div className="cart-item__amount">
                                <span>-</span>
                                <span className="amount">3</span>
                                <span>+</span>
                            </div>
                            <div className="cart-item__price">
                                770 ₽
                            </div>
                            <div className="cart-item__remove">
                                <span>&times;</span>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="width-block">
                                <div className="cart-item__img">
                                    <img src={require("../../images/pizza-shrimp.png")} alt="pizza"/>
                                </div>
                                <div className="cart-item__title">
                                    <h3>Креветки по-азиатски</h3>
                                    <span>толстое тесто, 40 см.</span>
                                </div>
                            </div>
                            <div className="cart-item__amount">
                                <span>-</span>
                                <span className="amount">1</span>
                                <span>+</span>
                            </div>
                            <div className="cart-item__price">
                                290 ₽
                            </div>
                            <div className="cart-item__remove">
                                <span>&times;</span>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="width-block">
                                <div className="cart-item__img">
                                    <img src={require("../../images/pizza-chiz.png")} alt="pizza"/>
                                </div>
                                <div className="cart-item__title">
                                    <h3>Чизбургер-пицца</h3>
                                    <span>тонкое тесто, 30 см.</span>
                                </div>
                            </div>
                            <div className="cart-item__amount">
                                <span>-</span>
                                <span className="amount">2</span>
                                <span>+</span>
                            </div>
                            <div className="cart-item__price">
                                370 ₽
                            </div>
                            <div className="cart-item__remove">
                                <span>&times;</span>
                            </div>
                        </div>

                    </div>
                    <div className="cart-description">
                        <div className="cart-description__amount">Всего пицц: <span>3 шт.</span></div>
                        <div className="cart-description__price">Сумма заказа: <span>900 ₽</span></div>
                    </div>
                    <div className="cart-buttons">
                        <button className="cart-buttons_back"><span>&lsaquo;</span>Вернуться назад</button>
                        <button className="cart-buttons_pay">Оплатить сейчас</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartBlock;