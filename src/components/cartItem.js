import React, { useContext } from 'react';
import './cartItem.css'
import { Button, Fade, Toast, ToastBody, ToastHeader, Spinner } from "reactstrap";
import { CartContext } from '../context/cart/cart.context';

const CartItem = (props) => {
    const { name, regular_price, qty } = props.product
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)


    return (
        <Fade className="mt-3">
            <div className="cart-item-wrapp">
                <div className="cart-item">
                    <h6>{name}</h6>
                    <h6 className="cart-item-qty-price">{qty} x ${regular_price}</h6>
                    <div className="cart-item-qty-selector">
                        <button onClick={() => removeItemFromCart(props.product.id)}>-</button>
                        <input value={qty} />
                        <button onClick={() => addItemToCart(props.product)}>+</button>
                    </div>
                </div>
                <div className="cart-item  cart-item-totalPrice">
                    <p>${regular_price * qty}</p>
                </div>
                <div className="cart-item cart-item-delete">
                    <Button onClick={() => clearItemFromCart(props.product.id)}>x</Button>
                </div>
                <div className="cart-item">
                    {/* <Toast>
                    <ToastHeader icon="primary">
                        Reactstrap
                    </ToastHeader>
                    <ToastBody>
                        This is a toast with a primary icon — check it out!
                    </ToastBody>
                </Toast> */}
                </div>
            </div>
        </Fade >
    );
}

export default CartItem;