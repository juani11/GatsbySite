import React, { useEffect } from 'react';
import { Message } from 'semantic-ui-react';
import CheckoutBoxHOC from '../../hoc/checkoutBox';
import useScript from '../../hooks/useScript';


const Payment = () => {

    const { MercadoPago } = useScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );

    useEffect(() => {
        if (MercadoPago) {
            console.log("use effect..");
            // Agrega credenciales de SDK
            const mp = new MercadoPago('TEST-be72fa34-7a30-49d0-809c-8bb3102603e4', {
                locale: 'es-AR'
            });

            // Inicializa el checkout
            mp.checkout({
                preference: {
                    id: '233024561-bd2293d5-efc9-47f4-ad0f-ea5670a3b6ba'
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