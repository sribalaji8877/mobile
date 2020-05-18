import React from 'react'
import CartList from './CartList';

function CartItems({ value }) {
    const { cart } = value;
    console.log(cart)
    return (
        <React.Fragment>
            {cart.map(cartlist => {
                return <CartList key={cartlist.id} cartlist={cartlist}></CartList>
            })}
        </React.Fragment>

    )
}
export default CartItems