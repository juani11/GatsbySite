import React, { useState } from 'react';
import { Container, Form, Button, Message } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

import ContactInfo from '../contactInfo';
import Shipping from '../shipping';


const PurchaseOrderForm = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        console.log("Submit form", data);
    }

    return (
        <Form loading={loading} onSubmit={handleSubmit(onSubmit)}>
            <ContactInfo register={register} errors={errors} />
            <Shipping register={register} errors={errors} setValue={setValue} />
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