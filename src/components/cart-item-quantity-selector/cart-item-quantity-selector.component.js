import React from 'react';
import { Button } from 'semantic-ui-react';
import { useCartContext } from '../../hooks/useCartContext';

import './cart-item-quantity-selector.styles.css'

const QuantitySelector = ({ product }) => {

    const context = useCartContext()

    return (
        <div className="cart-item-qty-selector">
            <Button size="mini" onClick={() => context.removeItemFromCart(product.sku)}>-</Button>
            <input value={product.qty} />
            <Button size="mini" onClick={() => context.addItemToCart(product)}>+</Button>
        </div>
    );
}

export default QuantitySelector;