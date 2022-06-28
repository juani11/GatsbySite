import React, { useContext } from 'react';
import { Divider } from 'semantic-ui-react';

import { CartContext } from '../context/cart/cart.context';
import CartItem from './cartItem';
import OrderCost from './orderCost';

import './cartListItems.css'

const CartListItems = () => {
    console.log("Render Component Cart!!");

    const { cart, subTotal } = useContext(CartContext)

    if (cart.length === 0) return <p>No hay productos en el carrito ...</p>

    return (
        <div>
            <ul className="cart-list">
                {cart.map((product) =>
                    <li className="cart-list-item" key={product.id}>
                        <CartItem product={product} />
                    </li>
                )}
            </ul>
            <Divider />
            <OrderCost data={subTotal()} />
        </div>
    )
}

export default CartListItems;