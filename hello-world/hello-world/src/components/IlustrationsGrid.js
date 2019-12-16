import React from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image"

import { chunk } from 'lodash';
import { useWindowSize } from '../hooks/windowsSize';

const IlustrationsGrid = (props) => {
    //Obtengo la resolucion actual de la pantalla
    const { size } = useWindowSize();


    //Dependiendo de la resolucion de la pantalla, separo en arreglos de 4 o de 6 (3 columnas, o 2 columnas)
    //Separo el arreglo de imagenes retornado por la query en un arreglo de arreglos . donde cada arreglo tiene como maximo 4 o 6 imagenes. 
    //Por ej: Si el arreglo que devuelve la query tiene 24 imagenes, se separa el arreglo en un arreglo con 6 o 4 arreglos(cada uno con 4 o 6 elementos respectivamente)
    const columns = (size[0] <= 1224) ? 
                    chunk(props.data.edges.map(image => ({
                        ...image.node.childImageSharp
                    })), 6) :
                    chunk(props.data.edges.map(image => ({
                        ...image.node.childImageSharp
                    })), 4);


    return (
        <div className="ilustrations-grid-container">
            {columns.map(column => {
                return (
                    <div className="ilustrations-grid-column">
                        {column.map(image => {
                            const imgName = (image.fluid.originalName).split(".")[0]
                            const imgLink = '/' + imgName
                            return (
                                <div className="ilustrations-grid-img-wrapper" key={image.id} >
                                    <Link to={imgLink}>
                                        <Img fluid={image.fluid} durationFadeIn={1200} alt={imgName} />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default IlustrationsGrid;