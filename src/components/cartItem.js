import React, { useContext } from 'react';
import './cartItem.css'
import { Button, Fade, Toast, ToastBody, ToastHeader, Spinner } from "reactstrap";
import { CartContext } from '../context/cartContext';

const CartItem = (props) => {
    const { name, price, qty } = props.product
    const { addToCart, deleteFromCart } = useContext(CartContext)


    const handleItemDelete = () => {
        const deleteAllItemsOfProduct = true
        deleteFromCart(props.product.id, deleteAllItemsOfProduct)
    }
    return (
        <Fade className="mt-3">
            <div className="cart-item-wrapp">
                <div className="cart-item">
                    <h6>{name}</h6>
                    <h6 className="cart-item-qty-price">{qty} x ${price}</h6>
                    <div className="cart-item-qty-selector">
                        <button onClick={() => deleteFromCart(props.product.id)}>-</button>
                        <input value={qty} />
                        <button onClick={() => addToCart(props.product)}>+</button>
                    </div>
                </div>
                <div className="cart-item  cart-item-totalPrice">
                    <p>${price * qty}</p>
                </div>
                <div className="cart-item cart-item-delete">
                    <Button onClick={handleItemDelete}>x</Button>
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
        </Fade>
    );
}

export default CartItem;