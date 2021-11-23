import React, { useState } from 'react';
import { Container, Form, Button, Message } from 'semantic-ui-react';
import ContactInfo from './contactInfo';
import Shipping from './shipping';

import { useForm } from "react-hook-form";

const PurchaseOrderForm = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [loading, setLoading] = useState(false);

    const initialState = {
        email: null,
        hasShipping: true,
        shipping: {
            name: '',
            cellphone: '',
            province: '',
            town: '',
            zip: '',
            address: '',
        }
    }

    const [purchaseOrderData, setPurchaseOrderData] = useState(initialState)

    const onChange = (e) => {
        setPurchaseOrderData({ ...purchaseOrderData, [e.target.name]: e.target.value });
    };

    const onSubmit = (data) => {
        console.log("Submit form", data);
    }

    return (
        <Form loading={loading} onSubmit={handleSubmit(onSubmit)}>
            <ContactInfo onChange={onChange} register={register} errors={errors} />
            <Shipping register={register} errors={errors} />
            <Container>
                <Message
                    error
                    header='Action Forbidden'
                    content='You can only sign up for an account once with a given e-mail address.'
                />
                <Button color='grey' type='submit'>Proceder al pago</Button>
            </Container>
        </Form>
    );
}

export default PurchaseOrderForm;