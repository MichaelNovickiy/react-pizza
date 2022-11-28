import React from "react";
import "./AllItems.scss";
import "../../styles/basic.scss";
import PizzaCard from "./PizzaCard";
import {useDispatch, useSelector} from "react-redux";
import Loader from "./Loader";

const arr = []
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}


const AllItems = () => {
    const items = useSelector(state => state.pizzas.items)
    const cartItems = useSelector(({ cart }) => cart.items);
    const loading = useSelector(state => state.pizzas.loading)
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
            </div>
        </section>
    );
};

export default AllItems;