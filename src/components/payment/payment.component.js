import React, { useEffect } from 'react';
import Container from 'reactstrap/lib/Container';
import { Image } from 'semantic-ui-react';


import useScript from '../../hooks/useScript';
import CheckoutBoxHOC from '../../hoc/checkoutBox';
import Header from '../header/header.component';

import mpcreditimg from '../../images/layoutImgs/mpPaymentMethod/mpcredit.png';
import mpdebitimg from '../../images/layoutImgs/mpPaymentMethod/mpdebit.png';
import mpcashimg from '../../images/layoutImgs/mpPaymentMethod/mpcash.png';

import './payment.styles.css';

const mpPaymentMethods = [
    {
        name: "Tarjeta de Crédito",
        src: mpcreditimg
    },
    {
        name: "Tarjeta de Débito",
        src: mpdebitimg
    },
    {
        name: "Efectivo en puntos de pago",
        src: mpcashimg
    }
]


const Payment = ({ preferenceId }) => {

    const { MercadoPago } = useScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );

    useEffect(() => {
        if (MercadoPago) {
            // Agrega credenciales de SmercadopagoDK
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
        <Container>
            <p>Al momento de pagar con MercadoPago, serás redirigido y podrás pagar de las siguientes formas:</p>

            {
                mpPaymentMethods.map(({ name, src }) =>
                    <>
                        <Header type="h4" text={name} />
                        <Image src={src} />
                    </>
                )
            }
            <div className="cho-container"></div>
        </Container>
    );
}

export default CheckoutBoxHOC(Payment, 'Pago', 6);