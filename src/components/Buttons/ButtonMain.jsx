import React from "react";
import "./ButtonMain.scss";
import "../../styles/basic.scss";

const ButtonMain = ({active, amount}) => {
    return (
        <button className={`button ${active && 'active'}`}>
            <i className="fa-solid fa-plus"> </i>
            <span className="title">Добавить</span>
            {amount && <span className="amount">2</span>}
        </button>
    );
};

export default ButtonMain;