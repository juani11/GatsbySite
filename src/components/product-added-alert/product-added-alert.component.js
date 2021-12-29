import React from 'react';
import { Label, Transition } from 'semantic-ui-react';

const conf = {
    animation: "vertical flip",
    duration: 800,
    color: "green"
}

const ProductAddedAlert = ({ visible }) => {
    return (
        <Transition
            animation={conf.animation}
            duration={conf.duration}
            visible={visible}
        >
            <Label style={{ fontFamily: "Raleway, sans-serif" }}
                size="medium"
                color={conf.color} >
                Producto agregado correctamente!
            </Label>
        </Transition>
    );
}

export default ProductAddedAlert;