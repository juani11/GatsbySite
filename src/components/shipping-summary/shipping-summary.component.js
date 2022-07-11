import React from "react";
import { Button } from "semantic-ui-react";

import "./shipping-summary.styles.css"


const ShippingSummaryContainer = ({ children }) => {
    return (
        <div style={{ marginTop: "15px" }}>
            {children}
            {/* <Button size="mini">Modificar</Button> */}
        </div>
    )
}

const ShippingSummary = ({ shipping_data }) => {

    if (shipping_data) {
        const { department, locality, name, number, phone, province, street, zip } = shipping_data
        return (
            <ShippingSummaryContainer>
                <p className="shipping-summary-street">{`Calle ${street} ${number}`} {department && `Depto ${department}`}</p>
                <p className="shipping-summary-province">C.P. {zip} - {locality}, {province}</p>
                <p className="shipping-summary-name">{name} - {phone}</p>
            </ShippingSummaryContainer>
        )
    }
    else {
        return (
            <ShippingSummaryContainer>
                <p className="shipping-summary-street">Sin envío a domicilio. (Pasa a retirar)</p>
            </ShippingSummaryContainer>
        )
    }
}

export default ShippingSummary;
