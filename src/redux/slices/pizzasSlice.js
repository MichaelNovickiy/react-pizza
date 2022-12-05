import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
    loading: true
}

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        getPizzas: (state, action) => {
            state.items = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    },
})

export const fetchPizzas = (category, sort, search) => (dispatch) => {
    fetch(`https://6319cac38e51a64d2bec7366.mockapi.io/pizzas?${category !== null ? `category=${category}` : ""}&sortBy=${sort.type}&order=${sort.order}&search=${search}`)
        .then((res) => (res.json()))
        .then((res) => {
            dispatch(getPizzas(res))
            dispatch(setLoading(false))
        })
}

export const {getPizzas, setLoading} = pizzasSlice.actions

export default pizzasSlice.reducer