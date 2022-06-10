import React, { useReducer } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

import { purchaseOrderReducer } from '../reducer/purchase-order/purchase-order.reducer';

import Loading from '../components/loading/loading.component';
import OrderSummary from '../components/orderSummary';
import PurchaseOrderForm from '../components/purchaseOrder-form/purchaseOrder-form.component';
import Payment from '../components/payment/payment.component';
import ShippingSummary from '../components/shipping-summary/shipping-summary.component';

import '../components/checkout.css'

const initialState = {
    loading: false,
    error: false,
    mp_preferenceId: null
}

const windowGlobal = typeof window !== 'undefined' && window

if (windowGlobal.localStorage) {
    if (windowGlobal.localStorage.getItem('purchaseOrder')) {
        console.log("HAY purchaseOrder creada!!!!!!");
        const mp_preferenceId = JSON.parse(windowGlobal.localStorage.getItem('purchaseOrder'))

        initialState.mp_preferenceId = mp_preferenceId
    }
}

const Checkout = () => {

    const [state, dispatch] = useReducer(purchaseOrderReducer, initialState)

    const { loading, error, mp_preferenceId } = state;

    return (
        <Container>
            <section>

                <Loading loading={loading}>
                    {/* <Row>
                        <Col md={7}>
                            {mp_preferenceId
                                ? <Payment preferenceId={mp_preferenceId} />
                                : <PurchaseOrderForm checkoutState={{ loading, error }} dispatch={dispatch} />
                            }
                        </Col>
                        <Col md={5}>
                            <OrderSummary />
                        </Col>
                    </Row > */}

                    <Grid stackable reversed="mobile" >
                        <Grid.Column width={9}>
                            {mp_preferenceId
                                ? <Payment preferenceId={mp_preferenceId} />
                                : <PurchaseOrderForm checkoutState={{ loading, error }} dispatch={dispatch} />
                            }
                        </Grid.Column>
                        <Grid.Column width={7}>
                            {mp_preferenceId && <ShippingSummary />}
                            <OrderSummary />
                        </Grid.Column>
                    </Grid>
                </Loading>
            </section>
        </Container>
    );
}
export default Checkout;