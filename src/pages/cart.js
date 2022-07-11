import React from 'react';

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
                        <Button link="/checkout" floated="right" width={4}>Checkout</Button>
                    </div>
                }
                {/* </Container> */}
            </section>
        </Container>
    );
}
export default Cart;
