import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { CartContext } from '../../context/cart/cart.context';

import './cart-item-quantity-selector.styles.css'

const QuantitySelector = ({ product }) => {

    const { addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <div className="cart-item-qty-selector">
            <Button size="mini" onClick={() => removeItemFromCart(product.sku)}>-</Button>
            <input value={product.qty} />
            <Button size="mini" onClick={() => addItemToCart(product)}>+</Button>
        </div>
    );
}

export default QuantitySelector;