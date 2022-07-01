import React, { useEffect, Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"


import Container from 'reactstrap/lib/Container';


import useScript from '../../hooks/useScript';
import CheckoutBoxHOC from '../../hoc/checkoutBox';
import Header from '../header/header.component';

import mpcreditimg from '../../images/layoutImgs/mpPaymentMethod/mpcredit.png';
import mpdebitimg from '../../images/layoutImgs/mpPaymentMethod/mpdebit.png';
import mpcashimg from '../../images/layoutImgs/mpPaymentMethod/mpcash.png';

import './payment.styles.css';

const mpPaymentMethods = [
    {
        id: 1,
        name: "Tarjeta de Crédito",
        src: mpcreditimg
    },
    {
        id: 2,
        name: "Tarjeta de Débito",
        src: mpdebitimg
    },
    {
        id: 3,
        name: "Efectivo en puntos de pago",
        src: mpcashimg
    }
]


const Payment = ({ preferenceId }) => {

    const data = useStaticQuery(graphql`
		query {
			allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"} relativeDirectory: {eq:"layoutImgs/mpPaymentMethod"}}) {
				edges {
					node {
						base
						childImageSharp {
							fluid(maxWidth: 300) {
								...GatsbyImageSharpFluid
								originalName
							}
							id
						}
					}
				}
			}
		}
	`)

    console.log('useStaticQuery:', data.allFile.edges);
    console.log('RENDER PAYMENT!');

    const { MercadoPago } = useScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );



    useEffect(() => {
        if (MercadoPago) {
            // Agrega credenciales de mercadopagoSDK
            const mp = new MercadoPago(`${process.env.MP_PUBLIC_KEY}`, {
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
                data.allFile.edges.map(({ node: { childImageSharp: { id, fluid } } }, index) =>
                    <Fragment key={id}>
                        <Header type="h4" text={mpPaymentMethods[index].name} />
                        {/*<Image src={src} />*/}
                        <Img fluid={fluid} />
                    </Fragment>
                )
            }
            <div className="cho-container"></div>
        </Container>
    );
}

export default CheckoutBoxHOC(Payment, 'Pago', 6);