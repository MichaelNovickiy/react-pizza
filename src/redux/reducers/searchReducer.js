const initialState = {
    searchInput: '',
}

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_SEARCH_INPUT":
            return {
                ...state,
                searchInput: action.payload
            }
        default:
            return state
    }
}