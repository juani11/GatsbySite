import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import "./shopitem.css"

const ShopItem = (props) => {

    const { product } = props

    console.log("Product data: ", product);

    const productLink = '/' + product.name.replace(/\s/g, '-')

    const image = getImage(product.mainImage.src)

    return (
        <>
            <div className="shop-item">
                <Link to={productLink}>
                    <GatsbyImage image={image} alt={product.name} />
                </Link>
                <h4 className="shop-item-name">{product.name}</h4>
            </div>
        </>
    );
}

export default ShopItem;
