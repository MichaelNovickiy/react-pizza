import React from "react";
import "./ButtonMain.scss";
import "../../styles/basic.scss";
import {addPizzaToCart} from "../../redux/actions/cartActions";

const ButtonMain = ({dispatch, id, name, imageUrl, price, activeType, activeSize, addedCount}) => {

    const onAddToCart = () => {
        dispatch(addPizzaToCart({id, name, imageUrl, price, activeType, activeSize}))
    }

    return (
        <button className="button" onClick={onAddToCart}>
            <i className="fa-solid fa-plus"> </i>
            <span className="title"
            >Добавить</span>
            {addedCount && <span className="amount">{addedCount}</span>}
        </button>
    );
};

export default ButtonMain;