import React from "react";

import { currencyFormat } from "../utils/functions";

import './orderCost.css'

const OrderCost = ({ data }) => {

    const total = currencyFormat(data);

    return (
        <div className="order-cost">
            <p className="order-cost-subtotal"> Subtotal: {total}</p>
            <p className="order-cost-shipping"> Envío: -</p>
            <p className="order-cost-total"> Total: {total}</p>
        </div>
    );
}

export default OrderCost;