import React from 'react'
import { Container, Button } from 'reactstrap';
import CheckoutBoxHOC from '../hoc/checkoutBox';

const Payment = () => {
    return (
        <Container>
            {/*   <Button >Pagar</Button> */}
        </Container>
    );
}

export default CheckoutBoxHOC(Payment, 'Payment', 12);
