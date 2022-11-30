import React from "react";
import "./CartItem.scss"

const CartItem = ({props, totalPrice, totalCount, onRemoveItem, onPlusItem, onMinusItem}) => {
    return (
        <div className="cart-item">
            <div className="title-width">
                <div className="cart-item__img">
                    <img src={props.imageUrl} alt="pizza"/>
                </div>
                <div className="cart-item__title">
                    <h3>{props.name}</h3>
                    <span>{props.activeType} тесто, {props.activeSize} см.</span>
                </div>
            </div>
           <div className="buttons-width">
               <div className="cart-item__amount">
                <span onClick={() => {
                    onMinusItem(props.id)
                }}>-</span>
                   <span className="amount">{totalCount}</span>
                   <span onClick={() => {
                       onPlusItem(props.id)
                   }}>+</span>
               </div>
               <div className="cart-item__price">
                   {totalPrice} ₽
               </div>
               <div className="cart-item__remove"
                    onClick={() => {
                        onRemoveItem(props.id)
                    }}>
                   <span>&times;</span>
               </div>
           </div>
        </div>
    );
};

export default CartItem;