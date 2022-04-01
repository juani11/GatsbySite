import React, { useContext } from 'react';
import { Button, Fade } from "reactstrap";
import { Button as SemanticButton, Image } from "semantic-ui-react";

import QuantitySelector from './cart-item-quantity-selector/cart-item-quantity-selector.component';

import { CartContext } from '../context/cart/cart.context';
import { currencyFormat } from '../utils/functions';

import './cartItem.css'

const CartItem = ({ product }) => {

    const { sku, name, price, qty, options } = product
    const { purchaseOrderCreated, clearItemFromCart } = useContext(CartContext)

    return (
        <Fade className="mt-3">
            <div className="cart-item-wrapp">
                <div className="cart-item-image">

                </div>
                <div className="cart-item">
                    <h6 className="cart-item-name">{name}</h6>
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
                    {!purchaseOrderCreated &&
                        <QuantitySelector product={product} />}
                </div>
                <div className="cart-item  cart-item-totalPrice">
                    <p>{currencyFormat(price * qty)}</p>
                </div>
                {!purchaseOrderCreated &&
                    <div className="cart-item cart-item-delete">
                        <SemanticButton size="medium" onClick={() => clearItemFromCart(sku)}>x</SemanticButton>
                    </div>
                }
            </div>
        </Fade >
    );
}

export default CartItem;