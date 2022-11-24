import React, {useEffect, useRef, useState} from "react";
import "./SortDefault.scss";

const SortDefault = ({sortList}) => {
    const [sortBy, setSortBy] = useState(0)
    const [showSortBy, setShowSortBy] = useState(false)

    let activeTitle = sortList[sortBy]
    const sortRef = useRef(null)

    const onShowSortBy = () => setShowSortBy(!showSortBy)
    const selectSortBy = (index) => {
        setSortBy(index)
        setShowSortBy(false)
    }

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (!e.path.includes(sortRef.current)) {
                setShowSortBy(false)
            }
        })
    }, [])

    return (
        <div className="sort-default">
            <i className={`${showSortBy && "turn"} fa-solid fa-caret-up`}>
            </i> Сортировка по:
            <span className="sort-default__title"
                  onClick={onShowSortBy}
                  ref={sortRef}
            >{activeTitle}</span>

            {showSortBy && <ul className="sort__popup">
                {sortList.map((item, index) => {
                    return <li key={index}
                               className={sortBy === index ? "active" : ""}
                               onClick={() => selectSortBy(index)}
                    >{item}</li>
                })}
            </ul>}
        </div>
    );
};

export default SortDefault;