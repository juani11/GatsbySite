import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import { Grid } from 'semantic-ui-react';

import CheckoutBoxHOC from '../hoc/checkoutBox';
import { useCartContext } from '../hooks/useCartContext';
import { currencyFormat } from '../utils/functions';
import CartCost from './cartCost';

import './orderSummary.css'

const OrderSummary = () => {

    const context = useCartContext()

    return (
        <div style={{ marginTop: "15px" }}>
            <Grid columns={2}>
                {context.cart.map(item =>
                    <Grid.Row key={item.id}>
                        <Grid.Column>
                            <GatsbyImage image={item.mainImage} />
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            <p className="order-summary-product-name">{item.name}</p>
                            {item.options && item.options.map(option =>
                                <div key={option.id} className="order-summary-product-options">
                                    <p className="order-summary-product-option-name">{option.name}
                                        <span className="order-summary-product-option-value">{option.value}</span>
                                    </p>
                                </div>
                            )}
                            <p className="order-summary-product-price">
                                <span>{currencyFormat(item.price)}</span><span> x{item.qty}</span>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                )}
            </Grid >
            <hr></hr>
            <CartCost />
        </div>
    );
}


export default CheckoutBoxHOC(OrderSummary, 'Resumen de la orden', 6);