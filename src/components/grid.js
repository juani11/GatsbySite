import React, { useEffect, useRef } from 'react';

// import { chunk } from 'lodash';
import { chunkArray } from '../utils/functions';
import { useWindowSize } from '../hooks/windowsSize';
import GridItem from './grid-item';


import '../styles/animate.css'

const scrollToRef = (ref) => window.scrollTo(
    { /*behavior: "smooth",*/ top: ref.current.offsetTop - 90 }
)


const Grid = (props) => {
    console.log("render Grid!!");

    //Obtengo la resolucion actual de la pantalla
    const { tabletSize, mobileSize } = useWindowSize();

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

    if (tabletSize())
        cantColumns = columnsTablet;

    else if (mobileSize())
        cantColumns = columnsMobile;


    const chunkLength = Math.round(cantImgs / cantColumns);

    //Separo el arreglo de imagenes retornado por la query en un arreglo de arreglos, donde cada arreglo tiene como maximo (cantImgs / columnsWeb) elementos. 
    //Por ej: Si el arreglo que devuelve la query tiene 24 imagenes, y la cantidad de columnas requeridas es 4,  se separa el arreglo en 4 arreglos con 6 elementos cada uno (cantImgs / columnsWeb = 24/4 = 6)
    // const columns = chunk(edges.map(image => ({
    //     ...image.node
    // })), chunkLength);


    const columns = chunkArray(edges.map(image => ({
        ...image.node
    })), chunkLength)

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
                        {column.map(image =>
                            <GridItem
                                image={image}
                                detail={detail}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    );
}

export default Grid;