import React, { useReducer } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css'

import { purchaseOrderReducer } from '../reducer/purchase-order/purchase-order.reducer';

import OrderSummary from '../components/orderSummary';
import PurchaseOrderForm from '../components/purchaseOrder-form/purchaseOrder-form.component';
import Payment from '../components/payment/payment.component';


import '../components/checkout.css'

const Checkout = () => {

    const initialState = {
        loading: false,
        error: false,
        mp_preferenceId: null
    }

    const [state, dispatch] = useReducer(purchaseOrderReducer, initialState)

    const { loading, error } = state;

    return (
        <Container>
            <Row >
                <Col md={7}>
                    {state.mp_preferenceId ?
                        <Payment preferenceId={state.mp_preferenceId} /> :
                        <PurchaseOrderForm checkoutState={{ loading, error }} dispatch={dispatch} />
                    }
                </Col>
                <Col md={5}>
                    <OrderSummary />
                </Col>
            </Row >
        </Container>
    );
}
export default Checkout;