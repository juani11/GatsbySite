import React, { useEffect, Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button } from 'semantic-ui-react';


import Container from 'reactstrap/lib/Container';


import useScript from '../../hooks/useScript';
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


const Payment = ({ preferenceId, initPoint }) => {

    const data = useStaticQuery(graphql`
		query {
			allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"} relativeDirectory: {eq:"layoutImgs/mpPaymentMethod"}}) {
				edges {
					node {
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                        id
                        }
					}
				}
			}
		}
	`)

    console.log('useStaticQuery:', data.allFile.edges);
    console.log('RENDER PAYMENT!');

    // const { MercadoPago } = useScript(
    //     "https://sdk.mercadopago.com/js/v2",
    //     "MercadoPago"
    // );



    // useEffect(() => {
    //     if (MercadoPago) {
    //         // Agrega credenciales de mercadopagoSDK
    //         const mp = new MercadoPago(`${process.env.MP_PUBLIC_KEY}`, {
    //             locale: 'es-AR'
    //         });

    //         // Inicializa el checkout
    //         mp.checkout({
    //             preference: {
    //                 id: preferenceId
    //             },
    //             render: {
    //                 container: '.cho-container', // Indica el nombre de la clase donde se mostrará el botón de pago
    //                 label: 'Pagar con MercadoPago', // Cambia el texto del botón de pago (opcional)
    //             }
    //         });

    //     }
    // }, [MercadoPago]);


    const handleClick = () => {
        window.location.href = initPoint
    }

    return (
        <Container>
            <p>Al momento de pagar con MercadoPago, serás redirigido y podrás pagar de las siguientes formas:</p>

            {
                data.allFile.edges.map(({ node }, index) => {
                    const image = getImage(node)
                    const { childImageSharp: { id } } = node

                    return (
                        <Fragment key={id}>
                            <Header type="h4" text={mpPaymentMethods[index].name} />
                            <GatsbyImage
                                image={image}
                                alt={mpPaymentMethods[index].name}
                            />
                        </Fragment>
                    )
                })
            }
            {/* <div className="cho-container"></div> */}

            <div style={{ marginTop: "40px" }}>
                <Button onClick={handleClick} size="small" color="blue">Pagar con MercadoPago</Button>
            </div>
        </Container>
    );
}

export default Payment;