import React, { useEffect, useRef } from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image"
import ReactWOW from 'react-wow'

import { chunk } from 'lodash';
import { useWindowSize } from '../hooks/windowsSize';


import '../styles/animate.css'

const scrollToRef = (ref) => window.scrollTo(
    { /*behavior: "smooth",*/ top: ref.current.offsetTop - 90 }
)
const delay_arr = ["0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];


const AnimateGridImg = (props) => {
    const { image, imgName, imgLink, delay, detail } = props
    return (
        <ReactWOW animation='fadeIn' delay={delay} duration="0.5s">
            <div className="grid-img-wrapper" key={image.id} >
                {detail ?
                    <Link to={imgLink}>
                        <Img fluid={image.fluid} alt={imgName} style={{ borderRadius: 3 }} />
                    </Link>
                    : <Img fluid={image.fluid} alt={imgName} style={{ borderRadius: 3 }} />
                }
            </div>
        </ReactWOW>
    )
}

const Grid = (props) => {

    //Obtengo la resolucion actual de la pantalla
    const { size } = useWindowSize();

    const {
        data: { edges },
        location: { state },
        detail = true,
        columnsWeb = 4,
        columnsTablet = 4,
        columnsMobile = 2
    } = props


    const cantImgs = edges.length;
    //const cantColumns = (size[0] <= 1224) ? columnsMobile : columnsWeb;

    //Web(default)
    let cantColumns = columnsWeb;

    //Tablet
    if (size[0] >= 768 & size[0] <= 1224)
        cantColumns = columnsTablet;

    //Mobile    
    else if (size[0] <= 768)
        cantColumns = columnsMobile;


    const chunkLength = Math.round(cantImgs / cantColumns);

    //Separo el arreglo de imagenes retornado por la query en un arreglo de arreglos, donde cada arreglo tiene como maximo (cantImgs / columnsWeb) elementos. 
    //Por ej: Si el arreglo que devuelve la query tiene 24 imagenes, y la cantidad de columnas requeridas es 4,  se separa el arreglo en 4 arreglos con 6 elementos cada uno (cantImgs / columnsWeb = 24/4 = 6)
    const columns = chunk(edges.map(image => ({
        ...image.node.childImageSharp
    })), chunkLength);

    const gridRef = useRef(null);


    useEffect(() => {
        if (state) {
            if (state.scrollTop)
                scrollToRef(gridRef);
        }
    }, []);

    return (
        <div ref={gridRef} className="grid-container" style={{ marginTop: "50px" }}>
            {columns.map((column) => {
                return (
                    <div className="grid-column" key={column.id}>
                        {column.map(image => {
                            const imgName = (image.fluid.originalName).split(".")[0]
                            const imgLink = '/' + imgName.replace(/\s/g, '-')
                            const randomDelay = delay_arr[Math.floor(Math.random() * delay_arr.length)]
                            return (
                                <AnimateGridImg image={image} imgName={imgName} imgLink={imgLink} delay={randomDelay} detail={detail} key={image.id} />
                                /* <ReactWOW animation='fadeIn' delay={randomDelay} duration="0.5s">
                                    <div className="grid-img-wrapper" key={image.id} >
                                        <Link to={imgLink}>
                                            <Img fluid={image.fluid} alt={imgName} />
                                        </Link>
                                    </div>
                                </ReactWOW> */
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Grid;