import React, { Component } from 'react'
import { Consumer } from '../context/ContextCreate';
import CartItems from './CartItems';
import CartTotals from './CartTotals';

class Cart extends Component {
    render() {
        return (
            <div className="container">
                <Consumer>
                    {(value) => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                               <div>
                                    <h1>Your cart</h1>
                                <CartItems value={value}></CartItems>
                                <CartTotals value={value}></CartTotals>
                               </div>
                            )
                        } else {
                            return <h1>Your Cart is Empty</h1>
                        }
                    }}
                </Consumer>
            </div>
        )
    }
}
export default Cart
