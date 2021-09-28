import React from 'react'
import CheckoutBoxHOC from '../hoc/checkoutBox';
import Cart from './cart';
const OrderSummary = () => {
    return (<div>

        <Cart />
    </div>);
}


export default CheckoutBoxHOC(OrderSummary, 'Resumen de la orden', 6);