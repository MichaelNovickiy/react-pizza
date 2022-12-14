import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addPizzaToCart: (state, action) => {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            const cartData = {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            }

            localStorage.setItem('cartItems', JSON.stringify(cartData))

            return cartData;
        },
        removeCartItem: (state, action) => {
            const newItems = {
                ...state.items,
            };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];

            const cartData = {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }

            localStorage.setItem('cartItems', JSON.stringify(cartData))

            return cartData;
        },
        plusCartItem: (state, action) => {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        },
        minusCartItem: (state, action) => {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        },
        clearCart: (state) => {
            state.totalPrice = 0;
            state.totalCount = 0;
            state.items = {}

            localStorage.removeItem('cartItems')
        },
        fetchCartData: (state, action) => {
            state.items = action.payload.items
            state.totalPrice = action.payload.totalPrice
            state.totalCount = action.payload.totalCount
        }
    }
})

export const {addPizzaToCart, removeCartItem, plusCartItem, minusCartItem, clearCart, fetchCartData} = cartSlice.actions

export const selectCartItems = (state) => state.cart.items

export default cartSlice.reducer