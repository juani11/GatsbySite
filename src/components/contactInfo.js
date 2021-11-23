import React, { useState } from 'react'
import CheckoutBoxHOC from '../hoc/checkoutBox';
import { Form, Label } from 'semantic-ui-react'

const ContactInfo = (props) => {

    const { onChange, register, errors } = props;


    /*  const handleChangeEmail = e => {
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
     } */

    return (
        <div style={{ 'padding': '15px' }} >
            <Form.Field error={errors.email ? true : false}>
                <label>Email</label>
                <input type="text" onChange={onChange} name="email" {...register("email",
                    {
                        required: 'Debe ingresar un email',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Email inválido'
                        }
                    })} />
                {errors.email && <Label pointing color="red">{errors.email.message}</Label>}
            </Form.Field>
        </div>
    );

}
export default CheckoutBoxHOC(ContactInfo, 'Información de Contacto');