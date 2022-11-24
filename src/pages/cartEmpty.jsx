import Header from "../components/Header";
import CartEmptyBlock from "../components/CartEmpty";

function CartEmpty() {
    return (
        <div>
            <Header/>
            <CartEmptyBlock/>
        </div>
    );
}

export default CartEmpty;