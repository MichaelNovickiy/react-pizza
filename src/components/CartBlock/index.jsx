import React from "react";
import "./CartBlock.scss";
import "../../styles/basic.scss";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import CartEmptyBlock from "../CartEmpty";
import {clearCart, minusCartItem, plusCartItem, removeCartItem} from "../../redux/slices/cartSlice";

const CartBlock = () => {

    const {items, totalPrice, totalCount} = useSelector(({cart}) => (cart))
    const dispatch = useDispatch()

    console.log(items)

    const addedPizzas = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    const onClearCart = () => {
        if (window.confirm("Вы действительно хотите очистить корзину?")) {
            dispatch(clearCart());
        }
    };

    const onRemoveItem = (id) => {
        if (window.confirm("Вы действительно хотите удалить?")) {
            dispatch(removeCartItem(id));
        }
    };

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id));
    };

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id));
    };

    const onClickOrder = () => {
        alert(`Ваш заказ на сумму ${totalPrice} ₽ в колличестве пицц ${totalCount} скоро будет готов`);
    };

    return (<>
            {totalCount
                ?
                <section className="cart-block">
                    <div className="container">
                        <div className="cart cart__container">
                            <div className="cart__title-block">
                                <div className="cart__title"><i className="fa-solid fa-cart-shopping"> </i>Корзина</div>
                                <div className="cart__trash" onClick={onClearCart}>
                                    <i className="fa-regular fa-trash-can"> </i>Очистить корзину
                                </div>
                            </div>
                            {addedPizzas.map((obj) => {
                                return <CartItem key={obj.id}
                                                 totalPrice={items[obj.id].totalPrice}
                                                 totalCount={items[obj.id].items.length}
                                                 onRemoveItem={onRemoveItem}
                                                 onPlusItem={onPlusItem}
                                                 onMinusItem={onMinusItem}
                                                 props={obj}/>
                            })}
                            <div className="cart-description">
                                <div className="cart-description__amount">Всего пицц: <span>{totalCount} шт.</span>
                                </div>
                                <div className="cart-description__price">Сумма заказа: <span>{totalPrice} ₽</span></div>
                            </div>
                            <div className="cart-buttons">
                                <Link to={"/"}>
                                    <button className="cart-buttons_back"><span>&lsaquo;</span>Вернуться назад</button>
                                </Link>
                                <button className="cart-buttons_pay" onClick={onClickOrder}>Оплатить сейчас</button>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <CartEmptyBlock/>}
        </>

    );
};

export default CartBlock;