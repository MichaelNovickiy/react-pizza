import React from "react";
import "./AllItems.scss";
import "../../styles/basic.scss";
import ButtonMain from "../Buttons/ButtonMain";
import CardSettings from "../CardSettings";


const AllItems = () => {
    return (
        <section className="all-items-block">
            <div className="container radius">
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
                            <CardSettings dough={'thin'} size={30}/>
                            <div className="pizza-card__bottom-block">
                                <div className="pizza-card__price">от 395 ₽</div>
                                <ButtonMain/>
                            </div>
                        </div>

                        <div className="pizza-card">
                            <div className="pizza-card__image">
                                <img src={require("../../images/pizza-cheese.png")} alt="pizza"/>
                            </div>
                            <div className="pizza-card__title">Сырная</div>
                            <CardSettings dough={'traditional'} size={40}/>
                            <div className="pizza-card__bottom-block">
                                <div className="pizza-card__price">от 450 ₽</div>
                                <ButtonMain/>
                            </div>
                        </div>

                        <div className="pizza-card">
                            <div className="pizza-card__image">
                                <img src={require("../../images/pizza-shrimp.png")} alt="pizza"/>
                            </div>
                            <div className="pizza-card__title">Креветки по-азиатски</div>
                            <CardSettings/>
                            <div className="pizza-card__bottom-block">
                                <div className="pizza-card__price">от 290 ₽</div>
                                <ButtonMain active amount/>
                            </div>
                        </div>

                        <div className="pizza-card">
                            <div className="pizza-card__image">
                                <img src={require("../../images/pizza-chicken.png")} alt="pizza"/>
                            </div>
                            <div className="pizza-card__title">Сырный цыпленок</div>
                            <CardSettings/>
                            <div className="pizza-card__bottom-block">
                                <div className="pizza-card__price">от 330 ₽</div>
                                <ButtonMain active amount/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllItems;