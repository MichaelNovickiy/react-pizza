import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import Order from "./pages/order";
import OrderEmpty from "./pages/order-empty";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/empty" element={<OrderEmpty/>}/>
            </Routes>
        </BrowserRouter>
    );
}