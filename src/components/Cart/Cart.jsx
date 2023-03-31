import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    

    let total = 0
    let shipping = 0

    for(const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const tax = total * 7 / 100
    const grand = total + shipping + tax

    
    return (
        <div className='cart'>
            <h4>order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: {total} </p>
            <p>Total shipping: {shipping} </p>
            <p>Tax: {tax.toFixed(2)} </p>
            <h4>Grand total: ${grand} </h4>
        </div>
    );
};

export default Cart;