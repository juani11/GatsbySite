import React from 'react'

import FormField from './form-field/form-field.component.js';

const ContactInfo = (props) => {

    const { register, errors } = props;

    return (
        <div style={{ marginTop: "20px" }}>
            {/*    <Form.Field error={errors.email ? true : false}>
                <label>Email</label>
                <input type="text" {...register("email",
                    {
                        required: 'Debe ingresar un email',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Email inválido'
                        }
                    })} />
                {errors.email && <FormInputError >{errors.email.message}</FormInputError>}
            </Form.Field> */}

            <FormField register={register} name="email" error={errors.email} />
        </div>
    );

}
export default ContactInfo