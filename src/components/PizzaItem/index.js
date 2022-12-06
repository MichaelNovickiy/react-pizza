import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import './PizzaItem.scss'
import Loader from '../AllItems/Loaders/Loader';

const PizzaItem = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams();


    useEffect(() => {
        setLoading(true)
        fetch(`https://6319cac38e51a64d2bec7366.mockapi.io/pizzas/${id}`)
            .then((res) => (res.json()))
            .then((res) => {
                setItem(res)
                setLoading(false)
            })
    }, [])

    return (
        <>{
            !loading ?
                <div className="container pizzaBlock_radius">
                    <div className="pizzaBlock">
                        <h2>{item.name}</h2>
                        {<img src={item.imageUrl} alt="pizza"/>}
                        <p>{item.description}</p>
                        <h4>от {item.price} $</h4>
                        <Link to={'/'} className="link">
                            <button className="cart-buttons_back"><span>&lsaquo;</span>Вернуться назад</button>
                        </Link>
                    </div>
                </div> :
                <Loader/>
        }</>
    )
        ;
};

export default PizzaItem;