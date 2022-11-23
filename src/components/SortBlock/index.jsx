import React, {useState} from "react";
import "./SortBlock.scss";
import "../../styles/basic.scss";
import SortDefault from "./SortDefault";

const SortBlock = ({sortItems}) => {

    const [active, setActive] = useState(undefined)
    const setSort = (index) => setActive(index)

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
                    <SortDefault sortList={['популярности', 'цене', 'алфавиту']}/>
                </div>
            </div>
        </section>
    );
};

export default SortBlock;