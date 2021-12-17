import React, { useContext } from 'react';
import { Button, Fade } from "reactstrap";
import { Button as SemanticButton, Icon } from "semantic-ui-react";

import { CartContext } from '../context/cart/cart.context';

import './cartItem.css'

const CartItem = (props) => {
    const { sku, name, price, qty, options } = props.product
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)


    return (
        <Fade className="mt-3">
            <div className="cart-item-wrapp">
                <div className="cart-item">
                    <h6 style={{ textTransform: "uppercase", marginBottom: "15px" }}>{name}</h6>
                    {options && options.map(o => <h6>{o.name}: {o.value}</h6>)}

                    <h6 className="cart-item-qty-price">{qty} x ${price}</h6>
                    <div className="cart-item-qty-selector">
                        <button onClick={() => removeItemFromCart(sku)}>-</button>
                        {/* <SemanticButton size="mini" icon>
                            <Icon name='minus' size="small" />
                        </SemanticButton> */}
                        <input value={qty} />
                        <button onClick={() => addItemToCart(props.product)}>+</button>
                        {/* <SemanticButton size="mini" icon>
                            <Icon name='add' size="small" />
                        </SemanticButton> */}
                    </div>
                </div>
                <div className="cart-item  cart-item-totalPrice">
                    <p>${price * qty}</p>
                </div>
                <div className="cart-item cart-item-delete">
                    <Button onClick={() => clearItemFromCart(sku)}>x</Button>
                    {/* <SemanticButton size="mini" color='grey' icon>
                        <Icon name='delete' />
                    </SemanticButton> */}
                </div>
            </div>
        </Fade >
    );
}

export default CartItem;