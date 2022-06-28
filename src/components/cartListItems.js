import React from 'react';
import { Divider } from 'semantic-ui-react';

import CartItem from './cartItem';
import OrderCost from './orderCost';
import { useCartContext } from '../hooks/useCartContext';

import './cartListItems.css'

const CartListItems = () => {
    console.log("Render Component Cart!!");

    const context = useCartContext()

    if (context.cart.length === 0) return <p>No hay productos en el carrito ...</p>

    return (
        <div>
            <ul className="cart-list">
                {context.cart.map((product) =>
                    <li className="cart-list-item" key={product.id}>
                        <CartItem product={product} />
                    </li>
                )}
            </ul>
            <Divider />
            <OrderCost data={context.subTotal()} />
        </div>
    )
}

export default CartListItems;