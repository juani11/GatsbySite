import React, { useContext } from 'react';
import { Link } from 'gatsby';

import CartListItems from '../components/cartListItems';
import Container from 'reactstrap/lib/Container';
import { CartContext } from '../context/cart/cart.context';
import Button from '../components/button/button.component';

const Cart = () => {

    console.log("Render Page Cart!!");
    const { cart } = useContext(CartContext)

    return (
        <Container id="Shop" style={{ maxWidth: "1250px" }}>
            <section>
                {/* <Container> */}
                <CartListItems />
                {cart.length > 0 &&
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
