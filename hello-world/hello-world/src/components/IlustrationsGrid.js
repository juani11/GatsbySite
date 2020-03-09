import React, { useEffect ,useRef} from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image"

import { chunk } from 'lodash';
import { useWindowSize } from '../hooks/windowsSize';

import AOS from 'aos'


const scrollToRef = (ref) => window.scrollTo({ behavior: "smooth",top: ref.current.offsetTop -70})   
//const useMountEffect = (fun) => useEffect(fun, [])

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
        })), 3);

    const myRef = useRef(null)
   // useMountEffect(() => scrollToRef(myRef)) // Scroll on mount

    useEffect(() => {
        AOS.init();
        if(props.location.location.state){
            scrollToRef(myRef)
        }
    }, []);
    var delay;
    var delay_arr = [300,300,400,400];
    return (
        
        <div ref={myRef} className="ilustrations-grid-container"  style={{ marginTop: "50px"}}>
            {columns.map((column,index) => {
                delay = delay_arr[index];
                return (
                    <div className="ilustrations-grid-column">
                        {column.map(image => {
                            const imgName = (image.fluid.originalName).split(".")[0]
                            const imgLink = '/' + imgName
                            return (
                                <div 
                                 data-aos="fade-up" 
                                 data-aos-easing="ease"
                                 data-aos-delay={delay}
                                 data-aos-once="true"
                                 className="ilustrations-grid-img-wrapper" key={image.id} >
                                    <Link to={imgLink}>
                                        <Img fluid={image.fluid} durationFadeIn={1200} alt={imgName} />
                                    </Link>
                                    {/*<ImageZoom imgFluid={image.fluid}/>*/}
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