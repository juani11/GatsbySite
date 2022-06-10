
import React from "react";
import CheckoutBoxHOC from "../../hoc/checkoutBox";

const ShippingSummary = () => {
    return (
        <div style={{ marginTop: "15px" }}>
            <p style={{ fontWeight: "600", fontSize: "14px" }}>Calle 8 1323</p>
            <p style={{ fontWeight: "300", fontSize: "13px" }}>C.P. 1900 - La Plata, Buenos Aires</p>
            <p style={{ fontWeight: "300", fontSize: "13px" }}>Juan Ignacio Tagliero - 2216140500</p>
        </div>
    );
}
export default CheckoutBoxHOC(ShippingSummary, 'Resumen del domicilio', 6);
