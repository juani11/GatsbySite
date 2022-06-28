import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

import { Button as SemanticButton, Icon } from "semantic-ui-react";

import QuantitySelector from './cart-item-quantity-selector/cart-item-quantity-selector.component';

import { currencyFormat } from '../utils/functions';
import { useCartContext } from '../hooks/useCartContext';

import './cartItem.css'

const CartItem = ({ product }) => {

    const { sku, name, price, qty, options, mainImage } = product
    const context = useCartContext()

    console.log("mainImage: ", mainImage);
    return (
        // <Fade className="mt-3">
        <div className="cart-item-wrapp">
            <div className="cart-item cart-item-image">
                <GatsbyImage image={mainImage} />
            </div>
            <div className="cart-item">
                <p className="cart-item-name">{name}</p>
                {options &&
                    <div className="cart-item-options">
                        {options.map(o =>
                            <div className="cart-item-option" key={o.value}>
                                <p className="cart-item-option-name">{o.name}: <span className="cart-item-option-value">{o.value}</span></p>
                            </div>
                        )}
                    </div>
                }
                <h6 className="cart-item-qty-price">{qty} x {currencyFormat(price)}</h6>
                <QuantitySelector product={product} />
            </div>
            <div className="cart-item  cart-item-totalPrice">
                <p>{currencyFormat(price * qty)}</p>
            </div>

            <div className="cart-item cart-item-delete">
                {/* <SemanticButton size="medium" onClick={() => clearItemFromCart(sku)}>x</SemanticButton> */}
                <Icon name='close' size='large' onClick={() => context.clearItemFromCart(sku)} />
            </div>

        </div>
        // </Fade >
    );
}

export default CartItem;