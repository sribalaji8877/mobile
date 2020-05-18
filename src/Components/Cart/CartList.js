import React from 'react';
import '../../app.css'
import { Consumer } from '../context/ContextCreate';

export default function CartList({ cartlist }) {
    const { images, company, price, total, count ,id } = cartlist
    return (
        <Consumer >
            {(value) => {
                const {removeCart,increment,decrement}= value
                return (
                    <div className="carlist_overall">
                        <ul>
                            <li>
                                <h6>products</h6>
                                <img src={images} alt="cart_image"></img>
                            </li>
                            <li>
                                <h6>Name of products</h6>
                                <p>{company}</p>
                            </li>
                            <li>
                                <h6>price</h6>
                                <p>{price}</p>
                            </li>
                            <li>
                                <h6>Quantity</h6>
                                <div className="incre">
                                    <span onClick={()=>{decrement(id)}}>-</span>
                                    <span>{count}</span>
                                    <span onClick={()=>{increment(id)}}>+</span>
                                </div>
                            </li>
                            <li>
                                <h6 >Remove</h6>
                                <span className="close" onClick={()=>{removeCart(id)}}>X</span>
                            </li>
                            <li>
                                <h6>Total</h6>
                                <p>{total}</p>
                            </li>
                        </ul>
                    </div>
                )
            }}


        </Consumer>
    )
}
