import React from "react";
import "./PizzaCard.scss";
import CardSettings from "../../CardSettings";
import ButtonMain from "../../Buttons/ButtonMain";

const PizzaCard = ({name, imageUrl, price, types, sizes}) => {

    return (
        <div className="pizza-card">
            <div className="pizza-card__image">
                <img src={imageUrl} alt="pizza"/>
            </div>
            <div className="pizza-card__title">{name}</div>
            <CardSettings types={types} sizes={sizes}/>
            <div className="pizza-card__bottom-block">
                <div className="pizza-card__price">от {price} ₽</div>
                <ButtonMain/>
            </div>
        </div>
    );
};

export default PizzaCard;