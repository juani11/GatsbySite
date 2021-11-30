import React, { useState, useReducer } from 'react';
import { Container, Form, Button, Message, Popup } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

import { purchaseOrderReducer } from '../../reducer/purchase-order/purchase-order.reducer';
import purchaseOrderActionTypes from '../../reducer/purchase-order/purchase-order.types';
import { createPurchaseOrder } from '../../services/services';

import ContactInfo from '../contactInfo';
import Shipping from '../shipping';


const PurchaseOrderForm = () => {

    const { register, handleSubmit, setValue, formState: { errors }, unregister } = useForm();

    const [hasShipping, setHasShipping] = useState(true);

    const { START_CREATE_PURCHASE_ORDER,
        SUCCESS_PURCHASE_ORDER,
        ERROR_PURCHASE_ORDER } = purchaseOrderActionTypes

    const initialState = {
        loading: false,
        error: false,
        mp_payment: null
    }
    const [state, dispatch] = useReducer(purchaseOrderReducer, initialState)


    const onSubmit = (data) => {
        console.log("Submit form data:", data);
        console.log("Has shipping", hasShipping);

        const { email: payer_email, ...rest } = data;

        const request = {
            products: [
                {
                    "id": "1A",
                    "name": "El porque de los colores",
                    "qty": 1,
                    "price": 499
                },
                {
                    "id": "1AB",
                    "name": "Las aventuras de Bobo",
                    "qty": 1,
                    "price": 599
                }
            ],
            payer_email,
            shipping: hasShipping,
            shipping_data: rest
        }

        dispatch({ type: START_CREATE_PURCHASE_ORDER });

        createPurchaseOrder(request)
            .then(response => {
                console.log("response", response);
                if (response.status != 200) throw ('Se produjo un error...')
                response.json()
            })
            .then(data => {
                console.log(data)
                dispatch({
                    type: SUCCESS_PURCHASE_ORDER,
                    payload: data
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
        <Form loading={state.loading} onSubmit={handleSubmit(onSubmit)} error={state.error}>

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
                    trigger={<Button color='grey' type='submit' >Proceder al pago</Button>}
                    content="El pago será gestionado por MercadoPago"
                    basic
                />
                {/* <Button color='grey' type='submit'>Proceder al pago</Button> */}
            </Container>
        </Form>
    );
}

export default PurchaseOrderForm;