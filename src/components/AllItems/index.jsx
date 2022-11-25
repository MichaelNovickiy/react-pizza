import React from "react";
import "./AllItems.scss";
import "../../styles/basic.scss";
import PizzaCard from "./PizzaCard";
import {useSelector} from "react-redux";

const AllItems = () => {
    const items = useSelector(state => state.pizzas.items)

    return (
        <section className="all-items-block">
            <div className="container radius">
                <div className="all-items">
                    <h2 className="all-items__title">
                        Все пиццы
                    </h2>
                    <div className="pizzas">
                        {
                            items.map((item) => {
                                return <PizzaCard key={item.id} {...item}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllItems;