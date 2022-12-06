import React from "react";
import "./AllItems.scss";
import "../../styles/basic.scss";
import PizzaCard from "./PizzaCard";
import {useDispatch, useSelector} from "react-redux";
import Loader from "./Loaders/Skeletons";
import Paginator from "../Paginator";
import {selectItems, selectLoading} from "../../redux/slices/pizzasSlice";
import {selectCartItems} from "../../redux/slices/cartSlice";

const arr = []
for (let i = 1; i <= 8; i++) {
    arr.push(i);
}

const AllItems = () => {
    const items = useSelector(selectItems)
    const cartItems = useSelector(selectCartItems);
    const loading = useSelector(selectLoading)
    const dispatch = useDispatch()


    return (
        <section className="all-items-block">
            <div className="container radius">
                <div className="all-items">
                    <h2 className="all-items__title">
                        Все пиццы
                    </h2>
                    <div className="pizzas">
                        {loading
                            ?
                            arr.map((i, index) => {
                                return <Loader key={index}/>
                            })
                            :
                            items.map((item) => {
                                return <PizzaCard key={item.id}
                                                  dispatch={dispatch}
                                                  addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                                                  {...item}/>
                            })
                        }
                    </div>
                </div>
                <Paginator/>
            </div>
        </section>
    );
};

export default AllItems;