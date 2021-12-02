import React, { useState } from 'react';
import { Container, Form, Button, Message, Popup } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

import purchaseOrderActionTypes from '../../reducer/purchase-order/purchase-order.types';
import { createPurchaseOrder } from '../../services/services';

import ContactInfo from '../contactInfo';
import Shipping from '../shipping';

const {
    START_CREATE_PURCHASE_ORDER,
    SUCCESS_PURCHASE_ORDER,
    ERROR_PURCHASE_ORDER } = purchaseOrderActionTypes


const PurchaseOrderForm = ({ checkoutState: { loading, error }, dispatch }) => {

    const { register, handleSubmit, setValue, formState: { errors }, unregister } = useForm();

    const [hasShipping, setHasShipping] = useState(true);

    const onSubmit = (data) => {
        const { email: payer_email, ...shipping_data } = data;

        const request = {
            products: [
                {
                    "id": "1A",
                    "name": "El porque de los colores",
                    "qty": 1,
                    "price": 33
                }
            ],
            payer_email,
            shipping: hasShipping,
            shipping_data
        }

        dispatch({ type: START_CREATE_PURCHASE_ORDER });

        createPurchaseOrder(request)
            .then(response => {
                if (response.status != 200 && response.status != 201) throw ('Se produjo un error...')
                return response.json()
            })
            .then(data => {
                const { data: { preference_id } } = data;
                dispatch({
                    type: SUCCESS_PURCHASE_ORDER,
                    payload: preference_id
                });
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: ERROR_PURCHASE_ORDER,
                    payload: error
                });
            });
    }

    return (
        <Form loading={loading} onSubmit={handleSubmit(onSubmit)} error={error}>

            <ContactInfo register={register} errors={errors} />
            <Shipping
                register={register}
                errors={errors}
                setValue={setValue}
                unregister={unregister}
                hasShipping={hasShipping}
                setHasShipping={setHasShipping}
            />
            <Container>
                <Message
                    error
                    header='No fue posible crear la orden de pago'
                    content='Se produjo un error al generar la orden. Por favor, inténtelo nuevamente'
                />
                <Popup
                    trigger={<Button type='submit' >Proceder al pago</Button>}
                    content="El pago será gestionado por MercadoPago"
                    basic
                />
                {/* <Button color='grey' type='submit'>Proceder al pago</Button> */}
            </Container>
        </Form>
    );
}

export default PurchaseOrderForm;