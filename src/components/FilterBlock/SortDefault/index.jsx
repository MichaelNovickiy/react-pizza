import React, {useEffect, useRef, useState} from "react";
import "./SortDefault.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectSort, setSort} from "../../../redux/slices/filtersSlice";

const SortDefault = ({sortList}) => {
    const sort = useSelector(selectSort)
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
        const handleClickOutside = (e) => {
            if (!e.path.includes(sortRef.current)) {
                setShowSortBy(false)
            }
        }

        document.body.addEventListener("click", handleClickOutside)
        return () => (document.body.removeEventListener('click', handleClickOutside))
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