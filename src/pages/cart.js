import React from 'react';
import { Link } from 'gatsby';

import CartListItems from '../components/cartListItems';
import Container from 'reactstrap/lib/Container';
import Button from '../components/button/button.component';
import { useCartContext } from '../hooks/useCartContext';

const Cart = () => {

    console.log("Render Page Cart!!");
    const context = useCartContext()

    return (
        <Container id="Shop" style={{ maxWidth: "1250px" }}>
            <section>
                {/* <Container> */}
                <CartListItems />
                {context.cart.length > 0 &&
                    <div className="cart-checkout-button">
                        <Link to="/checkout" >
                            <Button > Checkout</Button>
                        </Link>
                    </div>
                }
                {/* </Container> */}
            </section>
        </Container>
    );
}
export default Cart;
