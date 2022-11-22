import React, {useState} from "react";
import "./SortBlock.scss";
import "../../styles/basic.scss";

const SortBlock = ({sortItems}) => {

    const [active, setActive] = useState(undefined)
    const setSort = (index) => setActive(index)

    const [sortBy, setSortBy] = useState("популярности")
    const selectSortBy = (sortBy) => {
        setSortBy(sortBy)
        setShowSortBy(false)
    }

    const [showSortBy, setShowSortBy] = useState(false)
    const onShowSortBy = () => setShowSortBy(!showSortBy)

    return (
        <section className="sort-block">
            <div className="container">
                <div className="sort">
                    <ul className="sort__buttons">
                        <li className={`${!active && "active"}`}
                            onClick={() => setSort(undefined)}
                        >Все
                        </li>

                        {sortItems.map((item, index) => {
                            return <li key={item + index}
                                       onClick={() => setSort(item + index)}
                                       className={`${active === item + index ? "active" : ""}`}
                            >
                                {item}
                            </li>
                        })}
                    </ul>
                    <div className="sort__default">
                        <i className={`${showSortBy && "turn"} fa-solid fa-caret-up`}>
                        </i> Сортировка по:
                        <button onClick={onShowSortBy}
                        >{sortBy}</button>
                        <div className={`${!showSortBy && "sort__popup_none"} sort__popup`}>
                            <div className={`${sortBy === "популярности" ? "active" : ""}`}
                                 onClick={() => selectSortBy("популярности")}
                            ><span>популярности</span></div>
                            <div className={`${sortBy === "цене" ? "active" : ""}`}
                                 onClick={() => selectSortBy("цене")}
                            ><span>цене</span></div>
                            <div className={`${sortBy === "алфавиту" ? "active" : ""}`}
                                 onClick={() => selectSortBy("алфавиту")}
                            ><span>алфавиту</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SortBlock;