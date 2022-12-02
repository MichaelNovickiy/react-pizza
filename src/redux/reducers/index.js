import {combineReducers} from "redux";
import {pizzasReducer as pizzas} from "./pizzasReducer";
import {filtersReducer as filters} from "./filtersReducer";
import {cartReducer as cart} from "./cartReducer";
import {searchReducer as search} from "./searchReducer";

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
    search,
});

export default rootReducer;