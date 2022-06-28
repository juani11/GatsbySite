import React, { useReducer } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Confirm, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

import { purchaseOrderReducer } from '../reducer/purchase-order/purchase-order.reducer';

import Loading from '../components/loading/loading.component';
import OrderSummary from '../components/orderSummary';
import PurchaseOrderForm from '../components/purchaseOrder-form/purchaseOrder-form.component';
import Payment from '../components/payment/payment.component';
import ShippingSummary from '../components/shipping-summary/shipping-summary.component';
import Card from '../components/card/card.component'

import '../components/checkout.css'
import CheckoutBoxHOC from '../hoc/checkoutBox';
import { useCartContext } from '../hooks/useCartContext';

const initialState = {
    loading: false,
    error: false,
    mp_preferenceId: null,
    shipping: { hasShipping: '', shippingData: '' }
}

const windowGlobal = typeof window !== 'undefined' && window

if (windowGlobal.localStorage) {
    if (windowGlobal.localStorage.getItem('purchaseOrder')) {
        console.log("HAY purchaseOrder creada!!!!!!");
        const purchaseOrder = JSON.parse(windowGlobal.localStorage.getItem('purchaseOrder'))

        //initialState.mp_preferenceId = purchaseOrder.preferenceId
        initialState.shipping = purchaseOrder.shippingData
    }
}

const Checkout = () => {

    const [state, dispatch] = useReducer(purchaseOrderReducer, initialState)

    const { loading, error, mp_preferenceId, shipping } = state;

    const context = useCartContext()

    console.log("render checkout!");
    return (
        <Container>
            <section>
                <Loading loading={loading}>
                    <Grid stackable reversed="mobile tablet vertically" >
                        <Grid.Column tablet={16} computer={9} >
                            {mp_preferenceId
                                ? <Payment preferenceId={mp_preferenceId} />
                                : <PurchaseOrderForm
                                    checkoutState={{ loading, error }}
                                    dispatch={dispatch}
                                />
                            }
                        </Grid.Column>
                        <Grid.Column tablet={16} computer={7}>
                            {mp_preferenceId && shipping &&
                                <Card title="Resumen del envío">
                                    <ShippingSummary data={shipping} />
                                </Card>
                            }
                            <Card title="Resumen de la orden">
                                <OrderSummary data={context.cart} />
                            </Card>
                        </Grid.Column>
                    </Grid>
                </Loading>
            </section>
        </Container>
    );
}
export default Checkout;