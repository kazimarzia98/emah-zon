import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const cart = props.cart;// option 1
    // const {cart} = props;// option 2

    console.log(cart);

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // when product quantity does not exist,it means 0, then set them as 1,
        
        // type 1;
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }

        // type 2:
        // product.quantity = product.quantity || 1;

        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected items : {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping} </p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h6>Grand Total:  ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;