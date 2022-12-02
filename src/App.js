import {Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import Cart from "./pages/cart";
import CartEmpty from "./pages/cartEmpty";
import {useEffect} from "react";
import {fetchPizzas} from "./redux/actions/pizzasActions";
import {useDispatch, useSelector} from "react-redux";

export default function App() {
    const dispatch = useDispatch()
    const category = useSelector(state => state.filters.category)
    const sort = useSelector(state => state.filters.sort)
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