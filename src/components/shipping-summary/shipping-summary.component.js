import React from "react";
import { Button } from "semantic-ui-react";

import "./shipping-summary.styles.css"

const ShippingSummary = ({ data }) => {

    if (!data.shipping_data) return null

    const { hasShipping, shipping_data: { department, locality, name, number, phone, province, street, zip } } = data

    return (
        <div style={{ marginTop: "15px", position: "relative" }}>
            {hasShipping ?
                <>
                    <p className="shipping-summary-street">{`Calle ${street} ${number}`} {department && `Depto ${department}`}</p>
                    <p className="shipping-summary-province">C.P. {zip} - {locality}, {province}</p>
                    <p className="shipping-summary-name">{name} - {phone}</p>
                </>
                :
                <p className="shipping-summary-street">Sin envío a domicilio. (Pasa a retirar)</p>
            }
            <Button size="mini">Modificar</Button>
        </div>
    );

}
export default ShippingSummary;
