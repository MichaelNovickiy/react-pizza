import React from "react";
import "./AllItems.scss";
import "../../styles/basic.scss";
import PizzaCard from "./PizzaCard";
import {useSelector} from "react-redux";
import ContentLoader from "react-content-loader"

const arr = []
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}


const AllItems = () => {
    const items = useSelector(state => state.pizzas.items)
    const loading = useSelector(state => state.pizzas.loading)

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
                            arr.map(()=>{
                                return <ContentLoader style={{margin: "30px 12px 0"}}
                                               speed={2}
                                               width={280}
                                               height={460}
                                               viewBox="0 0 280 460"
                                               backgroundColor="#c4c4c4"
                                               foregroundColor="#ffffff"
                                >
                                    <rect x="10" y="265" rx="8" ry="8" width="257" height="30"/>
                                    <rect x="10" y="316" rx="15" ry="15" width="259" height="82"/>
                                    <rect x="8" y="418" rx="0" ry="0" width="86" height="28"/>
                                    <circle cx="135" cy="130" r="120"/>
                                    <rect x="128" y="407" rx="26" ry="26" width="139" height="46"/>
                                </ContentLoader>
                            })
                            :
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