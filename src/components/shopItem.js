import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import "./shopitem.css"

const ShopItem = (props) => {

    const { product } = props

    const { cart, addToCart } = useContext(CartContext)
    const productLink = '/' + product.name.replace(/\s/g, '-')

    return (
        <div className="shop-item">
            <Link to={productLink}>
                <p>{product.name}</p>
            </Link>
            <p className="shop-item-price">${product.price}</p>
            <button onClick={() => addToCart(product)}>Add</button>
        </div>
    );
}

export default ShopItem;
