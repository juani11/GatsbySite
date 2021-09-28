import React, { useState } from 'react'
import CheckoutBoxHOC from '../hoc/checkoutBox';
import { Container, Form, FormGroup, Label, Input, FormText, Button, FormFeedback } from 'reactstrap';

const ContactInfo = (props) => {

    const { checkoutStep, setCheckoutStep } = props;
    const [contactInfo, setContactInfo] = useState(
        {
            email: '',
            valid: null,
            invalid: null
        }
    )


    const handleChangeEmail = e => {
        const { value } = e.target;
        setContactInfo({ email: value });
    }

    function checkEmail() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const check = re.test(contactInfo.email);

        setContactInfo({
            ...contactInfo,
            valid: check,
            invalid: !check
        })

        setCheckoutStep({ ...checkoutStep, contact: check })
    }

    return (
        <Container>
            <Form style={{ 'padding': '15px' }}>
                <FormGroup>
                    <Label for="shippingEmail">Email</Label>
                    <Input valid={contactInfo.valid} invalid={contactInfo.invalid} type="email" name="email" id="shippingEmail" value={contactInfo.email} onChange={handleChangeEmail} required />

                    <FormFeedback>Formato de email incorrecto!</FormFeedback>
                    <FormText> Mediante este email te notificaremos el codigo de seguimiento del envío!</FormText>
                </FormGroup>
                {/* <Alert color="warning">
                   
                </Alert> */}
                <div style={{ textAlign: "right", textTransform: "uppercase" }}>
                    <Button onClick={checkEmail}>
                        {/* <div style={{ "padding-left": "50px", "padding-right": "50px" }}>
                        <Spinner size="sm" color="light" />
                    </div> */}
                        Continuar
                    </Button>
                </div>

            </Form>

        </Container>

    );

}
export default CheckoutBoxHOC(ContactInfo, 'Información de Contacto');