import {Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import Cart from "./pages/cart";
import CartEmpty from "./pages/cartEmpty";

export default function App() {
    return (
        <Routes>
            <Route path="/" exact element={<Main/>}/>
            <Route path="/order" element={<Cart/>}/>
            <Route path="/empty" element={<CartEmpty/>}/>
        </Routes>);
}