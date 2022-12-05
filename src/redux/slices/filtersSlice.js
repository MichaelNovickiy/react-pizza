import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    category: null,
    sort: {
        type: "popular",
        order: "asc"
    }
}

export const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setSort: (state, action) => {
            state.sort.type = action.payload
        },
    },
})

export const {setCategory, setSort} = filtersSlice.actions

export const selectCategory = (state) => state.filter.category
export const selectSort = (state) => state.filter.sort

export default filtersSlice.reducer