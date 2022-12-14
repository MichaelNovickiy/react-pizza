import React, {useState} from 'react';
import './PizzaCard.scss';
import CardSettings from '../../CardSettings';
import ButtonMain from '../../Buttons/ButtonMain';
import {Link} from 'react-router-dom';

const PizzaCard = ({id, name, imageUrl, price, types, sizes, dispatch, addedCount}) => {

    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(sizes[0])
    const availableDoughs = ['тонкое', 'традиционное']


    return (
            <div className="pizza-card">
                <Link to={process.env.PUBLIC_URL +`/pizza/${id}`}>
                    <div className="pizza-card__image">
                        <img src={imageUrl} alt="pizza"/>
                    </div>
                    <div className="pizza-card__title">{name}</div>
                </Link>
                <CardSettings types={types}
                              sizes={sizes}
                              activeType={activeType}
                              setActiveType={setActiveType}
                              activeSize={activeSize}
                              setActiveSize={setActiveSize}
                              availableDoughs={availableDoughs}
                />
                <div className="pizza-card__bottom-block">
                    <div className="pizza-card__price">от {price} $</div>
                    <ButtonMain dispatch={dispatch}
                                id={id}
                                name={name}
                                imageUrl={imageUrl}
                                price={price}
                                sizes={sizes}
                                activeType={availableDoughs[activeType]}
                                activeSize={activeSize}
                                addedCount={addedCount}
                    />
                </div>
            </div>
    );
};

export default PizzaCard;