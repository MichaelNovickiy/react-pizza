import {combineReducers} from "redux";
import {pizzasReducer as pizzas} from "./pizzasReducer";
import {filtersReducer as filters} from "./filtersReducer";
import {cartReducer as cart} from "./cartReducer";

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
});

export default rootReducer;