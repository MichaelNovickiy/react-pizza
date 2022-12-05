import React from 'react';
import './Paginator.scss'
import {useDispatch, useSelector} from "react-redux";
import {selectActivePage, setActivePage} from "../../redux/slices/pizzasSlice";

const pages = [1, 2, 3]

const Paginator = () => {

    const dispatch = useDispatch();
    const activePage = useSelector(selectActivePage);

    const onChangePage = (pageNumber) => {
        dispatch(setActivePage(pageNumber))
    }

    return (
        <div className="container">
            <div className="paginator">
                {pages.map((pageNumber, index) => {
                    return <li className={`${activePage === pageNumber ? "active" : ""}`}
                               onClick={() => onChangePage(pageNumber)}
                               key={index}>{pageNumber}
                    </li>
                })}
            </div>
        </div>
    );
};

export default Paginator;