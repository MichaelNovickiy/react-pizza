import React from "react";
import Header from "../components/Header";
import SortBlock from "../components/SortBlock";
import AllItems from "../components/AllItems";

const Main = () => {

    const sortItems = ["Мясные", "Вегетарианская",
        "Гриль", "Острые", "Закрытые"]

    return (
        <div>
            <Header/>
            <SortBlock sortItems={sortItems}/>
            <AllItems/>
        </div>
    );
};

export default Main;