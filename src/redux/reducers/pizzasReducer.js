const pizzasInitial = {
    items: [],
    loading: false
}

export function pizzasReducer(state = pizzasInitial, action) {
    switch (action.type) {
        case "GET_PIZZAS":
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}