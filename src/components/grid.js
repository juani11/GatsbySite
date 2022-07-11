import React, { useEffect, useRef } from 'react';
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
            <div className="grid-img-wrapper" >
                {detail ?
                    <Link to={imgLink}>
                        <GatsbyImage image={image} alt={imgName} />
                    </Link>
                    : <GatsbyImage image={image} alt={imgName} />
                }
            </div>
        </ReactWOW>
    )
}

const Grid = (props) => {
    console.log("render Grid!!");
    //Obtengo la resolucion actual de la pantalla
    const { size } = useWindowSize();

    const {
        data: { edges },
        location: { state },
        detail,
        columnsWeb = 4,
        columnsTablet = 4,
        columnsMobile = 2
    } = props


    const cantImgs = edges.length;

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
        ...image.node
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
                            const imgName = image.name
                            const imgLink = '/' + imgName.replace(/\s/g, '-')
                            const randomDelay = delay_arr[Math.floor(Math.random() * delay_arr.length)]
                            return (
                                <AnimateGridImg
                                    key={image.id}
                                    detail={detail}
                                    image={getImage(image)}
                                    imgName={imgName}
                                    imgLink={imgLink}
                                    delay={randomDelay}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Grid;