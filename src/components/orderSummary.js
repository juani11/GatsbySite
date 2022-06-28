import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import { Grid } from 'semantic-ui-react';

import { currencyFormat } from '../utils/functions';

import './orderSummary.css'

const OrderSummary = ({ data }) => {

    if (!data) return null

    return (
        <Grid columns={2}>
            {data.map(item =>
                <Grid.Row key={item.sku}>
                    <Grid.Column>
                        <GatsbyImage image={item.mainImage} alt={item.name} />
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
    )
}


export default OrderSummary;