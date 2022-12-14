import React from "react";
import "./FilterBlock.scss";
import "../../styles/basic.scss";
import SortDefault from "./SortDefault";
import {useDispatch, useSelector} from "react-redux";
import {selectCategory, setCategory} from "../../redux/slices/filtersSlice";

const FilterBlock = ({sortItems}) => {
    const category = useSelector(selectCategory)
    const dispatch = useDispatch()

    const setSort = (index) => {
        dispatch(setCategory(index))
    }

    return (
        <section className="sort-block">
            <div className="container">
                <div className="sort">
                    <ul className="sort__buttons">
                        <li className={`${category === null ? "active" : ""}`}
                            onClick={() => setSort(null)}
                        >Все
                        </li>

                        {sortItems.map((item, index) => {
                            return <li key={item + index}
                                       onClick={() => setSort(index)}
                                       className={`${category === index ? "active" : ""}`}
                            >
                                {item}
                            </li>
                        })}
                    </ul>
                    <SortDefault sortList={
                        [
                            {name: "популярности", type: "popular", order: "desc"},
                            {name: "цене", type: "price", order: "desc"},
                            {name: "алфавиту", type: "name", order: "asc"},
                        ]
                    }/>
                </div>
            </div>
        </section>
    );
};

export default FilterBlock;