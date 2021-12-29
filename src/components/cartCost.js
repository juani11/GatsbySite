import React, { useContext } from "react";
import { Link } from "gatsby";

import { CartContext } from "../context/cart/cart.context";
import './cartCost.css'
import { Button } from "semantic-ui-react";
import { currencyFormat } from "../utils/functions";

const CartCost = () => {

    const { subTotal } = useContext(CartContext)

    const total = currencyFormat(subTotal());
    return (
        <div className="cart-cost">
            <p className="cart-cost-subtotal"> Subtotal: {total}</p>
            <p className="cart-cost-shipping"> Envío: -</p>
            <p className="cart-cost-total"> Total: {total}</p>
        </div>
    );
}

export default CartCost;