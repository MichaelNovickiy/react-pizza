import React from "react";
import Header from "../components/header";
import SortBlock from "../components/sort-block";
import AllItems from "../components/all-items";

const Main = () => {
    return (
        <div>
            <Header/>
            <SortBlock/>
            <AllItems/>
        </div>
    );
};

export default Main;