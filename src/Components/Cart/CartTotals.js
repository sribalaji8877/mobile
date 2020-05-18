import React from 'react';
import '../../app.css'

export default function CartTotals({value}) {
    const {subTotal,Tax,Total,discount,clearCart}= value;

    return (
        <div className="clear">
            <button onClick={()=>{clearCart()}}>Clear Cart</button>
    <h4>Subtotal :{subTotal} </h4>
    <p>discount :{discount}</p>
    <h4>Gst : {Tax}</h4>
    <h4>Total : {Total}</h4>
        </div>
    )
}
