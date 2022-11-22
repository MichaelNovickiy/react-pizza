import React from "react";
import "./sortBlock.scss";
import "../../styles/basic.scss";

const SortBlock = () => {
    return (
        <section className="sort-block">
            <div className="container">
                <div className="sort">
                    <div className="sort__buttons">
                        <button className="sort__button sort__button_active">Все</button>
                        <button className="sort__button">Мясные</button>
                        <button className="sort__button">Вегетарианская</button>
                        <button className="sort__button">Гриль</button>
                        <button className="sort__button">Острые</button>
                        <button className="sort__button">Закрытые</button>
                    </div>
                    <div className="sort__default">
                        <i className="fa-solid fa-caret-up"></i> Сортировка по:
                        <button>популярности</button>
                        <div className="sort__popup inactive">
                            <div className="sort__popup_active"><span>популярности</span></div>
                            <div><span>по цене</span></div>
                            <div><span>по алфавиту</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SortBlock;