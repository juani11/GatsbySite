import React from 'react';
import { Form } from 'semantic-ui-react';
import FormFieldError from '../form-field-error/form-field-error.component';

import formConfig from '../purchaseOrder-form/purchaseOrder-form.config';

const FormField = ({
    register,
    name,
    error,
    width = 16,
    maxLength = null
}) => {
    const handleFocus = e => { e.target.setAttribute("autocomplete", "nope"); }

    return (
        <Form.Field width={width} error={error} >
            <label>{formConfig[name].label}</label>
            <input onFocus={handleFocus} type="text" maxLength={maxLength && maxLength} {...register(name,
                { ...formConfig[name].rules }
            )}
            />
            {error && <FormFieldError >{error.message}</FormFieldError>}
        </Form.Field>
    );
}

export default FormField;