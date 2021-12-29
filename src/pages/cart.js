import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'semantic-ui-react';

import ShopCart from '../components/cart';

const Cart = () => {
    return (
        <div className="container" id="Shop" style={{ maxWidth: "1250px" }}>
            <section>
                <div className="container">
                    <ShopCart />
                </div>
            </section>
        </div>
    );
}
export default Cart;
