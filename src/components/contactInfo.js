import React from 'react'

import FormField from './form-field/form-field.component.js';

const ContactInfo = (props) => {

    const { register, errors } = props;

    return (
        <FormField register={register} name="email" error={errors.email} />
    );

}
export default ContactInfo