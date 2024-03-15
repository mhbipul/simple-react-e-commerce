/* eslint-disable react/prop-types */
import "./Cart.css"
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Cart = ({cart}) => {

    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice * 0.7;
    const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
        <h3> Order Summary :  </h3>
        <p>Selected item: {cart.length}</p>
        <p>Total Price: ${totalPrice} </p>
        <p>Shipping: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)} </p>
        <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
    </div>
  )
}

export default Cart