import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import React, { useContext } from 'react';

import { CartContext } from '../context/cart/cart.context';
import "./shopitem.css"

const ShopItem = (props) => {

    const { product } = props

    console.log("Product data: ", product);
    const { cart, addItemToCart } = useContext(CartContext)
    const productLink = '/' + product.name.replace(/\s/g, '-')

    const image = getImage(product.mainImage.src)

    return (
        <div className="shop-item">
            <Link to={productLink}>
                <GatsbyImage image={image} alt={product.name} />
                <p className="shop-item-name">{product.name}</p>
            </Link>
            {/* <p className="shop-item-price">${product.regular_price}</p> */}
            {/* <button onClick={() => addItemToCart(product)}>Add</button> */}
        </div>
    );
}

export default ShopItem;
