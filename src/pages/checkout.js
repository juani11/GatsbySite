import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import OrderSummary from '../components/orderSummary';


import PurchaseOrderForm from '../components/purchaseOrder-form/purchaseOrder-form.component';

import 'semantic-ui-css/semantic.min.css'
import '../components/checkout.css'
import Payment from '../components/payment/payment.component';

const Checkout = () => {

    return (
        <Container>
            <Row >
                <Col md={7}>
                    {true ? <Payment /> : <PurchaseOrderForm />}
                </Col>
                <Col md={5}>
                    <OrderSummary />
                </Col>
            </Row >
        </Container>
    );
}
export default Checkout;