const filterInitial = {
    category: null,
    sort: {
        type: "popular",
        order: "asc"
    }
}

export function filtersReducer(state = filterInitial, action) {
    switch (action.type) {
        case "SET_CATEGORY":
            return {
                ...state,
                category: action.payload
            }
        case "SET_SORT":
            return {
                ...state,
                sort: {...state.sort, type: action.payload}
            }
        default:
            return state
    }
}