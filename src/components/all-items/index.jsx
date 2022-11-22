import React from "react";
import "./allItems.scss";
import "../../styles/basic.scss";

const AllItems = () => {
    return (
        <section className="all-items-block">
            <div className="container all-items_radius">
                <div className="all-items">
                    <h2 className="all-items__title">
                        Все пиццы
                    </h2>
                    <div className="pizzas">
                        <div className="pizza-card">
                            <div className="pizza-card__image">
                                <img src={require("../../images/pizza-chiz.png")} alt="pizza"/>
                            </div>
                            <div className="pizza-card__title">Чизбургер-пицца</div>
                            <div className="pizza-card__settings">
                                <div className="pizza-card__settings-dough">
                                    <span className="active">тонкое</span>
                                    <span>традиционное</span>
                                </div>
                                <div className="pizza-card__settings-size">
                                    <span className="active">26 см.</span>
                                    <span>30 см.</span>
                                    <span>40 см.</span>
                                </div>
                            </div>
                            <div className="pizza-card__bottom-block">
                                <div className="pizza-card__price">от 395 ₽</div>
                                <button className="pizza-card__button active">
                                    <i className="fa-solid fa-plus"> </i>
                                    Добавить
                                    <span className="pizza-card__button_amount">2</span>
                                </button>
                            </div>
                        </div>

                        <div className="pizza-card">
                            <div className="pizza-card__image">
                                <img src={require("../../images/pizza-cheese.png")} alt="pizza"/>
                            </div>
                            <div className="pizza-card__title">Сырная</div>
                            <div className="pizza-card__settings">
                                <div className="pizza-card__settings-dough">
                                    <span className="active">тонкое</span>
                                    <span>традиционное</span>
                                </div>
                                <div className="pizza-card__settings-size">
                                    <span className="active">26 см.</span>
                                    <span>30 см.</span>
                                    <span>40 см.</span>
                                </div>
                            </div>
                            <div className="pizza-card__bottom-block">
                                <div className="pizza-card__price">от 450 ₽</div>
                                <button className="pizza-card__button active">
                                    <i className="fa-solid fa-plus"> </i>
                                    Добавить
                                </button>
                            </div>
                        </div>

                        <div className="pizza-card">
                            <div className="pizza-card__image">
                                <img src={require("../../images/pizza-shrimp.png")} alt="pizza"/>
                            </div>
                            <div className="pizza-card__title">Креветки по-азиатски</div>
                            <div className="pizza-card__settings">
                                <div className="pizza-card__settings-dough">
                                    <span className="active">тонкое</span>
                                    <span>традиционное</span>
                                </div>
                                <div className="pizza-card__settings-size">
                                    <span>26 см.</span>
                                    <span className="active">30 см.</span>
                                    <span>40 см.</span>
                                </div>
                            </div>
                            <div className="pizza-card__bottom-block">
                                <div className="pizza-card__price">от 290 ₽</div>
                                <button className="pizza-card__button">
                                    <i className="fa-solid fa-plus"> </i>
                                    Добавить
                                </button>
                            </div>
                        </div>

                        <div className="pizza-card">
                            <div className="pizza-card__image">
                                <img src={require("../../images/pizza-chicken.png")} alt="pizza"/>
                            </div>
                            <div className="pizza-card__title">Сырный цыпленок</div>
                            <div className="pizza-card__settings">
                                <div className="pizza-card__settings-dough">
                                    <span>тонкое</span>
                                    <span className="active">традиционное</span>
                                </div>
                                <div className="pizza-card__settings-size">
                                    <span>26 см.</span>
                                    <span className="active">30 см.</span>
                                    <span>40 см.</span>
                                </div>
                            </div>
                            <div className="pizza-card__bottom-block">
                                <div className="pizza-card__price">от 330 ₽</div>
                                <button className="pizza-card__button">
                                    <i className="fa-solid fa-plus"> </i>
                                    Добавить
                                </button>
                            </div>
                        </div>

                        <div className="pizza-card">
                            <div className="pizza-card__image">
                                <img src={require("../../images/pizza-chiz.png")} alt="pizza"/>
                            </div>
                            <div className="pizza-card__title">Чизбургер-пицца</div>
                            <div className="pizza-card__settings">
                                <div className="pizza-card__settings-dough">
                                    <span className="active">тонкое</span>
                                    <span>традиционное</span>
                                </div>
                                <div className="pizza-card__settings-size">
                                    <span className="active">26 см.</span>
                                    <span>30 см.</span>
                                    <span>40 см.</span>
                                </div>
                            </div>
                            <div className="pizza-card__bottom-block">
                                <div className="pizza-card__price">от 395 ₽</div>
                                <button className="pizza-card__button active">
                                    <i className="fa-solid fa-plus"> </i>
                                    Добавить
                                    <span className="pizza-card__button_amount">2</span>
                                </button>
                            </div>
                        </div>

                        <div className="pizza-card">
                            <div className="pizza-card__image">
                                <img src={require("../../images/pizza-cheese.png")} alt="pizza"/>
                            </div>
                            <div className="pizza-card__title">Сырная</div>
                            <div className="pizza-card__settings">
                                <div className="pizza-card__settings-dough">
                                    <span className="active">тонкое</span>
                                    <span>традиционное</span>
                                </div>
                                <div className="pizza-card__settings-size">
                                    <span className="active">26 см.</span>
                                    <span>30 см.</span>
                                    <span>40 см.</span>
                                </div>
                            </div>
                            <div className="pizza-card__bottom-block">
                                <div className="pizza-card__price">от 450 ₽</div>
                                <button className="pizza-card__button active">
                                    <i className="fa-solid fa-plus"> </i>
                                    Добавить
                                </button>
                            </div>
                        </div>

                        <div className="pizza-card">
                            <div className="pizza-card__image">
                                <img src={require("../../images/pizza-shrimp.png")} alt="pizza"/>
                            </div>
                            <div className="pizza-card__title">Креветки по-азиатски</div>
                            <div className="pizza-card__settings">
                                <div className="pizza-card__settings-dough">
                                    <span className="active">тонкое</span>
                                    <span>традиционное</span>
                                </div>
                                <div className="pizza-card__settings-size">
                                    <span>26 см.</span>
                                    <span className="active">30 см.</span>
                                    <span>40 см.</span>
                                </div>
                            </div>
                            <div className="pizza-card__bottom-block">
                                <div className="pizza-card__price">от 290 ₽</div>
                                <button className="pizza-card__button">
                                    <i className="fa-solid fa-plus"> </i>
                                    Добавить
                                </button>
                            </div>
                        </div>

                        <div className="pizza-card">
                            <div className="pizza-card__image">
                                <img src={require("../../images/pizza-chicken.png")} alt="pizza"/>
                            </div>
                            <div className="pizza-card__title">Сырный цыпленок</div>
                            <div className="pizza-card__settings">
                                <div className="pizza-card__settings-dough">
                                    <span>тонкое</span>
                                    <span className="active">традиционное</span>
                                </div>
                                <div className="pizza-card__settings-size">
                                    <span>26 см.</span>
                                    <span className="active">30 см.</span>
                                    <span>40 см.</span>
                                </div>
                            </div>
                            <div className="pizza-card__bottom-block">
                                <div className="pizza-card__price">от 330 ₽</div>
                                <button className="pizza-card__button">
                                    <i className="fa-solid fa-plus"> </i>
                                    Добавить
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllItems;