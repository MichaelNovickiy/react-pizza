import Header from "../components/header";
import CartEmpty from "../components/cart-empty";

function OrderEmpty() {
    return (
        <div>
            <Header/>
            <CartEmpty/>
        </div>
    );
}

export default OrderEmpty;