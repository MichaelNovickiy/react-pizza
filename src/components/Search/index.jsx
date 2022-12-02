import React from "react";
import "./Search.scss"
import {useDispatch, useSelector} from "react-redux";
import {setSearchInput} from "../../redux/actions/searchActions";

const Search = () => {
    const {searchInput} = useSelector(state => state.search)
    const dispatch = useDispatch()

    const setInput = (e) => {
        dispatch(setSearchInput(e.target.value))
    }

    return (
        <div className="container">
            <div className="search-block">
                <input type="search" className="search" placeholder="Search..."
                       value={searchInput} onChange={(e) => setInput(e)}
                />
                <i className="fa-solid fa-magnifying-glass"> </i>
            </div>
        </div>
    );
};

export default Search;