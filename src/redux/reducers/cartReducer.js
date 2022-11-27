const cartInitial = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

export function cartReducer(state = cartInitial, action) {
    switch (action.type) {
        case "ADD_PIZZA_TO_CART":
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            };

            const allPizzas = [].concat.apply([], Object.values(newItems));

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: allPizzas.reduce((sum, obj) => obj.price + sum, 0)
            }
        default:
            return state
    }
}