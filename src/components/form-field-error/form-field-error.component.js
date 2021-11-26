import React from 'react';
import { Label } from 'semantic-ui-react';

const FormFieldError = ({ children }) => {
    return (
        <Label pointing color="red">{children}</Label>
    );
}

export default FormFieldError;