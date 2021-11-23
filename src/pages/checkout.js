import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import OrderSummary from '../components/orderSummary';

import PurchaseOrderForm from '../components/purchaseOrder-form';

import 'semantic-ui-css/semantic.min.css'
import '../components/checkout.css'

const Checkout = () => {

    return (
        <Container>
            <Row >
                <Col md={7}>
                    <PurchaseOrderForm />
                </Col>
                <Col md={5}>
                    <OrderSummary />
                </Col>
            </Row >
        </Container>
    );
}
export default Checkout;