import React from "react";
import Header from "../components/Header";
import FilterBlock from "../components/FilterBlock";
import AllItems from "../components/AllItems";

const Main = () => {
    const sortItems = ["Мясные", "Вегетарианская",
        "Гриль", "Острые", "Закрытые"]

    return (
        <div>
            <Header/>
            <FilterBlock sortItems={sortItems}/>
            <AllItems/>
        </div>
    );
};

export default Main;