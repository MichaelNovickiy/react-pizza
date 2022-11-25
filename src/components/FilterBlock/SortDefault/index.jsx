import React, {useEffect, useRef, useState} from "react";
import "./SortDefault.scss";
import {useDispatch, useSelector} from "react-redux";
import {setSort} from "../../../redux/actions/filtersActions";

const SortDefault = ({sortList}) => {
    const sort = useSelector(state => state.filters.sort)
    const dispatch = useDispatch()

    const [showSortBy, setShowSortBy] = useState(false)

    const activeTitle = sortList.find((item) => item.type === sort.type).name
    const sortRef = useRef(null)

    const onShowSortBy = () => setShowSortBy(!showSortBy)
    const selectSortBy = (index) => {
        dispatch(setSort(sortList[index].type))
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
                               className={item.type === sort.type ? "active" : ""}
                               onClick={() => selectSortBy(index)}
                    >{item.name}</li>
                })}
            </ul>}
        </div>
    );
};

export default SortDefault;