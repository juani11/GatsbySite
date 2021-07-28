import React from 'react';
import ShopCart from '../components/cart';
import { CartContext } from "../context/cartContext"

const Cart = () => {
    return (
        <div className="container" id="Shop" style={{ maxWidth: "1250px" }}>
            <section>
                <h4 style={{ textAlign: "center" }}>Cart page</h4>
                <div className="container">
                    <ShopCart />
                </div>
            </section>
        </div>

    );
}
export default Cart;
