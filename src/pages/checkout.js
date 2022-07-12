import React, { useReducer } from 'react';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

import { purchaseOrderReducer } from '../reducer/purchase-order/purchase-order.reducer';

import Loading from '../components/loading/loading.component';
import OrderSummary from '../components/orderSummary';
import PurchaseOrderForm from '../components/purchaseOrder-form/purchaseOrder-form.component';
import Payment from '../components/payment/payment.component';
import ShippingSummary from '../components/shipping-summary/shipping-summary.component';
import Card from '../components/card/card.component'

import { useCartContext } from '../hooks/useCartContext';
import { isBrowser } from '../utils/functions';
import DesktopContainer from '../components/desktop-container/desktop-container.component';

import '../components/checkout.css'


const initialState = {
    loading: false,
    error: false,
    mp_preferenceId: null,
    init_point: null,
    shipping: { hasShipping: '', shippingData: '' }
}


if (isBrowser()) {
    if (window.localStorage.getItem('purchaseOrder')) {
        console.log("HAY purchaseOrder creada!!!!!!");
        const purchaseOrder = JSON.parse(window.localStorage.getItem('purchaseOrder'))

        //initialState.mp_preferenceId = purchaseOrder.preferenceId
        initialState.shipping = purchaseOrder.shippingData
    }
}

const Checkout = () => {

    const [state, dispatch] = useReducer(purchaseOrderReducer, initialState)

    const { loading, error, mp_preferenceId, init_point, shipping } = state;

    const context = useCartContext()

    return (
        <DesktopContainer >
            <section>
                <Loading loading={loading}>
                    <Grid stackable reversed="mobile tablet vertically" >
                        <Grid.Column tablet={16} computer={9} >
                            {mp_preferenceId ?
                                <Card title="Pago" >
                                    <Payment
                                        preferenceId={mp_preferenceId}
                                        initPoint={init_point}
                                    />
                                </Card>
                                : <PurchaseOrderForm
                                    checkoutState={{ loading, error }}
                                    dispatch={dispatch}

                                />
                            }
                        </Grid.Column>
                        <Grid.Column tablet={16} computer={7}>
                            {mp_preferenceId && shipping &&
                                <Card title="Resumen del envío" >
                                    <ShippingSummary data={shipping} />
                                </Card>
                            }
                            <Card title="Resumen de la orden" >
                                <OrderSummary data={context.cart} />
                            </Card>
                        </Grid.Column>
                    </Grid>
                </Loading>
            </section>
        </DesktopContainer>
    );
}
export default Checkout;