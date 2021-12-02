import React, { useEffect } from 'react';
import { Message } from 'semantic-ui-react';
import CheckoutBoxHOC from '../../hoc/checkoutBox';
import useScript from '../../hooks/useScript';


const Payment = ({ preferenceId }) => {

    const { MercadoPago } = useScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );

    useEffect(() => {
        if (MercadoPago) {
            // Agrega credenciales de SDK
            const mp = new MercadoPago(process.env.MP_PUBLIC_KEY, {
                locale: 'es-AR'
            });

            // Inicializa el checkout
            mp.checkout({
                preference: {
                    id: preferenceId
                },
                render: {
                    container: '.cho-container', // Indica el nombre de la clase donde se mostrará el botón de pago
                    label: 'Pagar con MercadoPago', // Cambia el texto del botón de pago (opcional)
                }
            });

        }
    }, [MercadoPago]);

    return (
        <>
            <Message color='blue'>Utilizando la opción Pagar a través de Mercado Pago serás redirigido y podrás pagar de las siguientes formas:</Message>
            <div className="cho-container"></div>
        </>
    );
}

export default Payment;