import React from 'react';
import { Label } from 'semantic-ui-react';

import "./product-option.styles.css"

const ProductOption = ({ option, className, handleClick }) => {
    const { id, value } = option;
    return (
        <Label
            as='a'
            basic
            id={value}
            name={value}
            onClick={(e) => handleClick(e, id)}
            className={className(id, value)}>
            {value}
        </Label>
    );
}

export default ProductOption;