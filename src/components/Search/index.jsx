import React, {useCallback, useState} from "react";
import "./Search.scss"
import debounce from "lodash.debounce"
import {useDispatch} from "react-redux";
import {setSearchInput} from "../../redux/actions/searchActions";

const Search = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")

    const setInput = (e) => {
        setInputValue(e.target.value)
        updateSearchInput(e.target.value)
    }

    const updateSearchInput = useCallback(
        debounce((value) => {
            dispatch(setSearchInput(value))
        }, 300), [dispatch, setSearchInput])

    return (
        <div className="container">
            <div className="search-block">
                <input type="search" className="search" placeholder="Search..."
                       value={inputValue} onChange={(e) => setInput(e)}
                />
                <i className="fa-solid fa-magnifying-glass"> </i>
            </div>
        </div>
    );
};

export default Search;