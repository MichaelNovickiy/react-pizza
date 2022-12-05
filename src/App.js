import {Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import Cart from "./pages/cart";
import CartEmpty from "./pages/cartEmpty";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCategory, selectSort} from "./redux/slices/filtersSlice";
import {fetchPizzas} from "./redux/slices/pizzasSlice";

export default function App() {
    const dispatch = useDispatch()
    const category = useSelector(selectCategory)
    const sort = useSelector(selectSort)
    const search = useSelector(state => state.search.searchInput)

    useEffect(() => {
        dispatch(fetchPizzas(category, sort, search))
    }, [category, sort, search])

    return (
        <Routes>
            <Route path="/" exact element={<Main/>}/>
            <Route path="/order" element={<Cart/>}/>
            <Route path="/empty" element={<CartEmpty/>}/>
        </Routes>);
}