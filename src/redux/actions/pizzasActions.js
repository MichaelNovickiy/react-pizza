export const getPizzas = (items) => ({
    type: "GET_PIZZAS",
    payload: items
})

export const fetchPizzas = (category, sort) => (dispatch) => {
    fetch(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ""}&_sort=${sort.type}&_order=${sort.order}`)
        .then((res) => (res.json()))
        .then((res) => {
            dispatch(getPizzas(res))
        })
}