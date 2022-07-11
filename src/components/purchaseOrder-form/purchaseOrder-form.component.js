import React, { useEffect, useState } from 'react';
import { Container, Form, Message } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

import { createPurchaseOrder } from '../../services/services';

import ContactInfo from '../contactInfo';
import Shipping from '../shipping';
import Button from '../button/button.component';
import {
    errorCreatePurchaseOrder,
    startCreatePurchaseOrder,
    successCreatePurchaseOrder
} from '../../reducer/purchase-order/purchase-order.actions';
import Card from '../card/card.component';
import { useCartContext } from '../../hooks/useCartContext';
import { isBrowser } from '../../utils/functions';
import DesktopContainer from '../desktop-container/desktop-container.component';


const PurchaseOrderForm = ({ checkoutState: { loading, error }, dispatch }) => {
    console.count("render PurchaseOrderForm")

    const { register, handleSubmit, setValue, formState: { errors }, unregister, reset } = useForm();

    const [hasShipping, setHasShipping] = useState(true);


    const context = useCartContext()

    const onSubmit = (data) => {
        const { email: payer_email, ...shipping_data } = data;

        const request = {
            products: [...context.cart],
            payer_email,
            shipping: hasShipping,
            shipping_data
        }

        dispatch(startCreatePurchaseOrder());

        createPurchaseOrder(request)
            .then(response => {
                if (response.status != 200 && response.status != 201) throw ('Se produjo un error...')
                return response.json()
            })
            .then(data => {
                const { data: { preference_id, init_point } } = data;
                dispatch(successCreatePurchaseOrder(preference_id,
                    init_point,
                    {
                        hasShipping,
                        shipping_data: {
                            email: payer_email,
                            ...shipping_data
                        }
                    })
                );
            })
            .catch(error => {
                console.log(error)
                dispatch(errorCreatePurchaseOrder(error));
            });
        // setTimeout(() => {
        //     const preference_id = 1452;
        //     const init_point = "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1030664029-797556d5-2dce-4a12-a085-c0fbc34ee593"
        //     dispatch(successCreatePurchaseOrder(preference_id, init_point,
        //         {
        //             hasShipping,
        //             shipping_data: {
        //                 email: payer_email,
        //                 ...shipping_data
        //             }
        //         })
        //     );
        // }, 2000);

    }


    useEffect(() => {
        if (isBrowser()) {
            if (window.localStorage.getItem('purchaseOrder')) {
                const purchaseOrder = JSON.parse(window.localStorage.getItem('purchaseOrder'))
                const formInitialValues = purchaseOrder.shippingData
                console.log("formInitialValues: ", {
                    hasShipping: formInitialValues.hasShipping,
                    ...formInitialValues.shipping_data
                });
                reset({
                    hasShipping: formInitialValues.hasShipping,
                    ...formInitialValues.shipping_data
                })
                setHasShipping(formInitialValues.hasShipping)
            }
        }

    }, [])

    return (
        <Form onSubmit={handleSubmit(onSubmit)} error={error}>

            <Card title="Información de Contacto" >
                <ContactInfo
                    register={register}
                    errors={errors}
                />
            </Card>

            <Card title="Información del Envío" >
                <Shipping
                    register={register}
                    errors={errors}
                    setValue={setValue}
                    unregister={unregister}
                    hasShipping={hasShipping}
                    setHasShipping={setHasShipping}
                />
            </Card>

            <Container>
                <Message
                    error
                    header='No fue posible crear la orden de pago'
                    content='Se produjo un error al generar la orden. Por favor, inténtelo nuevamente'
                />
            </Container>

            <DesktopContainer>
                <Button type='submit' >Proceder al pago</Button>
            </DesktopContainer>

        </Form>
    );
}

export default PurchaseOrderForm;