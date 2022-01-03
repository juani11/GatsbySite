import React from 'react';
import { Button as SemanticButton } from 'semantic-ui-react'

import './button.styles.css';

const Button = ({ type, children }) => {
    return (
        <SemanticButton type={type} > {children} </SemanticButton>
    );
}

export default Button;