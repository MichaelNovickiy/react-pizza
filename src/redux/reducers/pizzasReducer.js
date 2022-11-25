const pizzasInitial = {
    items: [],
    loading: true
}

export function pizzasReducer(state = pizzasInitial, action) {
    switch (action.type) {
        case "GET_PIZZAS":
            return {
                ...state,
                items: action.payload
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}