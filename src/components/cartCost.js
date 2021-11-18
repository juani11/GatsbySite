import React, { useContext } from "react";
import { Button } from "reactstrap";
import { Link } from "gatsby";

import { CartContext } from "../context/cart/cart.context";
import './cartCost.css'

const CartCost = () => {

    const { subTotal } = useContext(CartContext)

    return (
        <div className="cart-cost">
            <p className="cart-cost-subtotal"> Subtotal: ${subTotal()}</p>
            <p className="cart-cost-shipping"> Envío: -</p>
            <p className="cart-cost-total"> Total: ${subTotal()}</p>
            <Link to="/checkout"  >
                <Button outline  > Checkout</Button>
            </Link>
        </div>
    );
}

export default CartCost;