import {configureStore} from '@reduxjs/toolkit';
import filterReducer from './slices/filtersSlice';
import pizzasReducer from "./slices/pizzasSlice";
import searchReducer from "./slices/searchSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
    reducer: {
        filter: filterReducer,
        pizzas: pizzasReducer,
        cart: cartReducer,
        search: searchReducer,
    },
});
