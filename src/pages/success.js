import React, { useEffect } from 'react';
import { navigate } from "gatsby"

import Container from 'reactstrap/lib/Container';

import useFetch from '../hooks/useFetch';
import { getPurchaseOrder } from '../services/services';

import WithPlaceholder from '../hoc/withPlaceholder';
import ShippingSummary from '../components/shipping-summary/shipping-summary.component';
import OrderSummary from '../components/orderSummary';
import Card from '../components/card/card.component';
import OrderCost from '../components/orderCost';
import { Divider } from 'semantic-ui-react';
import { isBrowser } from '../utils/functions';
import { useCartContext } from '../hooks/useCartContext';

if (isBrowser()) {
    window.localStorage.removeItem("cart");
    window.localStorage.removeItem("purchaseOrder");
}

const Success = ({ location }) => {
    console.log("Location: ", location);

    const params = new URLSearchParams(location.search);

    const payment_id = params.get("payment_id");
    const status = params.get("status");
    const external_reference = params.get("external_reference");

    const { loading, data, error } = useFetch(getPurchaseOrder, external_reference)
    const context = useCartContext()

    const ShippingSummaryWithPlaceholder = WithPlaceholder(ShippingSummary)
    const OrderSummaryWithPlaceholder = WithPlaceholder(OrderSummary)

    useEffect(() => {
        context.clearCart()
    }, [])


    if (!payment_id && !status) {
        if (isBrowser()) navigate("/")
        return null
    }

    return (
        <Container>
            <section>
                <div style={{ padding: "20px", marginBottom: "70px" }}>
                    <h2>{`¡Gracias por tu compra! :)`}</h2>
                    <p>El pago ya ha sido aprobado!, en breve iniciaremos el proceso de envío a la direccion especificada!.</p>
                </div>

                <Card title="Resumen del envío">
                    <ShippingSummaryWithPlaceholder
                        isLoading={loading}
                        data={data?.shipping_data}
                    />
                </Card>
                <Card title="Resumen de la orden">
                    <OrderSummaryWithPlaceholder
                        isLoading={loading}
                        type="image"
                        data={data?.products}
                    />
                    <Divider />
                    <OrderCost data={data?.total_price} />
                </Card>
            </section>
        </Container>
    )
}

export default Success;