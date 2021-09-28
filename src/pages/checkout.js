import React, { useState } from 'react';
import Shipping from '../components/shipping';
import { Container, Row, Col } from 'reactstrap';
import Payment from '../components/payment';

import OrderSummary from '../components/orderSummary';

import '../components/checkout.css'
import ContactInfo from '../components/contactInfo';

const Checkout = () => {

    const [checkoutStep, setCheckoutStep] = useState({
        contact: false, shipping: false, payment: false
    });

    return (
        <Container>
            <Row >
                <Col md={7}>
                    <ContactInfo checkoutStep={checkoutStep} setCheckoutStep={setCheckoutStep} />
                    <Shipping checkoutStep={checkoutStep} />
                    <Payment />
                </Col>
                <Col md={5}>
                    <OrderSummary />
                </Col>
            </Row >
        </Container>
    );
}
export default Checkout;