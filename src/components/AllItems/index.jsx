// import React, {useEffect, useState} from "react";
import "./AllItems.scss";
import "../../styles/basic.scss";
import PizzaCard from "./PizzaCard";

// const AllItems = () => {
//     const [pizzas, setPizzas] = useState([])
//
//     useEffect(() => {
//         fetch("http://localhost:3000/db.json").then((res) => (res.json()))
//             .then((res) => {
//                 setPizzas(res.pizzas)
//             })
//     }, [])
//
//     return (
//         <section className="all-items-block">
//             <div className="container radius">
//                 <div className="all-items">
//                     <h2 className="all-items__title">
//                         Все пиццы
//                     </h2>
//                     <div className="pizzas">
//                         {
//                             pizzas.map((item) => {
//                                 return <PizzaCard key={item.id} {...item}/>
//                             })
//                         }
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default AllItems;
//

import React, {Component} from "react";
import {connect} from "react-redux";
import {getPizzas} from "../../redux/actions/pizzasActions";

class AllItems extends Component {
    componentDidMount() {
        fetch("http://localhost:3000/db.json").then((res) => (res.json()))
            .then((res) => {
                this.setState(this.props.getPizzas(res.pizzas))
            })
    }

    render() {
        return (
            <section className="all-items-block">
                <div className="container radius">
                    <div className="all-items">
                        <h2 className="all-items__title">
                            Все пиццы
                        </h2>
                        <div className="pizzas">
                            {
                                this.props.items.map((item) => {
                                    return <PizzaCard key={item.id} {...item}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


const mapStateToProps = (state) => ({
    items: state.pizzas.items,
    // loading: state.pizzas.loading
})

const mapDispatchToProps = (dispatch) => ({
    getPizzas: (items) => dispatch(getPizzas(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllItems);