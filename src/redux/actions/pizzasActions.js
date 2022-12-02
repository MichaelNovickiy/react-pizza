export const getPizzas = (items) => ({
    type: "GET_PIZZAS",
    payload: items
})

export const setLoading = (value) => ({
    type: "SET_LOADING",
    payload: value
})

export const fetchPizzas = (category, sort, search) => (dispatch) => {
    console.log(search)
    fetch(`https://6319cac38e51a64d2bec7366.mockapi.io/pizzas?${category !== null ? `category=${category}` : ""}&sortBy=${sort.type}&order=${sort.order}&search=${search}`)
        .then((res) => (res.json()))
        .then((res) => {
            dispatch(getPizzas(res))
            dispatch(setLoading(false))
        })
}