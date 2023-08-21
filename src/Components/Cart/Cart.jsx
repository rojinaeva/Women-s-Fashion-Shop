import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    console.log(props.cart);
    let total=0;
    let ShippingCharge=0;
    for(const product of cart){
        total=total+product.price;
        ShippingCharge=ShippingCharge+product.shippingCharge;
    }
    const tax=total*7/100;
    const grandTotal=total+ShippingCharge+tax;
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <p>seleted items:{cart.length}</p>
            <p>Total Price:${total.toFixed(2)}</p>
            <p>Total Shipping Charge:${ShippingCharge.toFixed(2)}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h6>Grand Total:${grandTotal.toFixed(2)}</h6>
            
        </div>
    );
};

export default Cart;