import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import CartItem from './cartItem';
import CartCost from './cartCost';

import './cart.css'

const Cart = () => {

    const { cart, cantProducts, subTotal } = useContext(CartContext)

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
            <hr></hr>
            <CartCost />
        </div>
    )
}

export default Cart;