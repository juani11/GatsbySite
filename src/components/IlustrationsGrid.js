import React, { useEffect, useRef } from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image"

import { chunk } from 'lodash';
import { useWindowSize } from '../hooks/windowsSize';
import ReactWOW from 'react-wow'
import '../styles/animate.css'
const scrollToRef = (ref) => window.scrollTo(
    { behavior: "smooth", top: ref.current.offsetTop - 90 }
)

const IlustrationsGrid = (props) => {
    //Obtengo la resolucion actual de la pantalla
    const { size } = useWindowSize();

    const {
        data: { edges },
        location: { state },
        animate
    } = props
    //Dependiendo de la resolucion de la pantalla, separo en arreglos de 4 o de 6 (3 columnas, o 2 columnas)
    //Separo el arreglo de imagenes retornado por la query en un arreglo de arreglos . donde cada arreglo tiene como maximo 4 o 6 imagenes. 
    //Por ej: Si el arreglo que devuelve la query tiene 24 imagenes, se separa el arreglo en un arreglo con 6 o 4 arreglos(cada uno con 4 o 6 elementos respectivamente)
    const columns = (size[0] <= 1224) ?
        chunk(edges.map(image => ({
            ...image.node.childImageSharp
        })), 14) : //Para calcular este valor, hacer -> (cantidad total de imagenes que va tener la grilla / cantidad de columnas que se deseen)
        chunk(edges.map(image => ({
            ...image.node.childImageSharp
        })), 7);

    const gridRef = useRef(null);

    useEffect(() => {
        if (state) {
            if (state.scrollTop)
                scrollToRef(gridRef);
        }
    }, []);
    const delay_arr = ["0.1s", "0.2s", "0.3s", "0.4s", "0.5s", "0.6s", "0.7s", "0.8s"];
    return (
        <div ref={gridRef} className="ilustrations-grid-container" style={{ marginTop: "50px" }}>
            {columns.map((column, index) => {
                return (
                    <div className="ilustrations-grid-column">
                        {column.map(image => {
                            const imgName = (image.fluid.originalName).split(".")[0]
                            const imgLink = '/' + imgName
                            const randomDelay = delay_arr[Math.floor(Math.random() * delay_arr.length)]
                            return (
                                animate ?
                                    (
                                        <ReactWOW animation='fadeIn' delay={randomDelay} duration="0.7s">
                                            <div className="ilustrations-grid-img-wrapper" key={image.id} >
                                                <Link to={imgLink}>
                                                    <Img fluid={image.fluid} alt={imgName} style={{ borderRadius: 3 }} />
                                                </Link>

                                            </div>
                                        </ReactWOW>
                                    ) :
                                    (
                                        <div
                                            className="ilustrations-grid-img-wrapper" key={image.id} >
                                            <Link to={imgLink}>
                                                <Img fluid={image.fluid} alt={imgName} />
                                            </Link>
                                        </div>
                                    )
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default IlustrationsGrid;