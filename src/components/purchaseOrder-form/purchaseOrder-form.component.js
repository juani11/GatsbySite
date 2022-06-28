import React, { useContext, useEffect, useState } from 'react';
import { Confirm, Container, Form, Message } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

import { createPurchaseOrder } from '../../services/services';

import { CartContext } from '../../context/cart/cart.context';

import ContactInfo from '../contactInfo';
import Shipping from '../shipping';
import Button from '../button/button.component';
import {
    errorCreatePurchaseOrder,
    startCreatePurchaseOrder,
    successCreatePurchaseOrder
} from '../../reducer/purchase-order/purchase-order.actions';
import Card from '../card/card.component';

const windowGlobal = typeof window !== 'undefined' && window


const PurchaseOrderForm = ({ checkoutState: { loading, error }, dispatch }) => {

    const { register, handleSubmit, setValue, formState: { errors }, unregister, reset } = useForm();

    const [hasShipping, setHasShipping] = useState(true);

    const [showConfirm, setShowConfirm] = useState(false)

    const { cart } = useContext(CartContext);

    const onSubmit = (data) => {
        const { email: payer_email, ...shipping_data } = data;

        const request = {
            products: [...cart],
            payer_email,
            shipping: hasShipping,
            shipping_data
        }

        dispatch(startCreatePurchaseOrder());

        // createPurchaseOrder(request)
        //     .then(response => {
        //         if (response.status != 200 && response.status != 201) throw ('Se produjo un error...')
        //         return response.json()
        //     })
        //     .then(data => {
        //         const { data: { preference_id } } = data;
        //         dispatch(successCreatePurchaseOrder(preference_id,
        //             {
        //                 hasShipping,
        //                 shipping_data: {
        //                     email: payer_email,
        //                     ...shipping_data
        //                 }
        //             })
        //         );
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         dispatch(errorCreatePurchaseOrder(error));
        //     });
        setTimeout(() => {
            const preference_id = 1452;
            dispatch(successCreatePurchaseOrder(preference_id,
                {
                    hasShipping,
                    shipping_data: {
                        email: payer_email,
                        ...shipping_data
                    }
                })
            );
        }, 2000);

    }


    useEffect(() => {
        if (windowGlobal.localStorage) {
            if (windowGlobal.localStorage.getItem('purchaseOrder')) {
                const purchaseOrder = JSON.parse(windowGlobal.localStorage.getItem('purchaseOrder'))
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
        <>
            <Form onSubmit={handleSubmit(onSubmit)} error={error}>

                <Card title="Información de Contacto">
                    <ContactInfo
                        register={register}
                        errors={errors}
                    />
                </Card>

                <Card title="Información del Envío">
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
                    <Button color='grey' type='submit'>Proceder al pago</Button>
                </Container>

            </Form>

        </>
    );
}

export default PurchaseOrderForm;