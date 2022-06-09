import React from 'react'

import CheckoutBoxHOC from '../hoc/checkoutBox';
import CartListItems from './cartListItems';

const OrderSummary = () => {
    return (
        <div style={{ 'padding': '15px' }} >

            <CartListItems />
        </div>
    );
}


export default CheckoutBoxHOC(OrderSummary, 'Resumen de la orden', 6);