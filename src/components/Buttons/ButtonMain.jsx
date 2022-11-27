import React from "react";
import "./ButtonMain.scss";
import "../../styles/basic.scss";
import {addPizzaToCart} from "../../redux/actions/cartActions";

const ButtonMain = ({active, amount, dispatch, id, name, imageUrl, price, activeType, activeSize}) => {

    const onAddToCart = () => {
        console.log({id, name, imageUrl, price, activeType, activeSize})
        dispatch(addPizzaToCart({id, name, imageUrl, price, activeType, activeSize}))
    }

    return (
        <button className={`button ${active && "active"}`}>
            <i className="fa-solid fa-plus"> </i>
            <span className="title"
                  onClick={onAddToCart}>Добавить</span>
            {amount && <span className="amount">2</span>}
        </button>
    );
};

export default ButtonMain;