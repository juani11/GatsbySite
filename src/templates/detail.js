import React, { useRef, useEffect } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Magnifier, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from 'react-image-magnifiers'
import ReactWOW from 'react-wow'


import { useWindowSize } from '../hooks/windowsSize';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import '../styles/animate.css'
import "./detail.css"


//import Grid from "../components/grid"
//import Slider from "../components/slider";

const scrollToRef = (ref) => window.scrollTo({ behavior: "auto", top: ref.current.offsetTop })

export default ({ data, location }) => {
    const ilustration = data.selectIlustration.edges[0].node
    const refDetail = useRef(null)

    const { size } = useWindowSize();

    useEffect(() => {
        scrollToRef(refDetail)
    }, []);

    return (
        <div ref={refDetail}>
            {
                (size[0] <= 1224)
                    ? (
                        <ReactWOW animation='fadeIn' delay="0.4s" duration="0.3s">
                            <Magnifier
                                className="input-position"
                                imageSrc={ilustration.childImageSharp.fluid.src}
                                largeImageSrc={ilustration.childImageSharp.fluid.src}
                                mouseActivation={MOUSE_ACTIVATION.SINGLE_CLICK}
                                touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
                            />
                        </ReactWOW>

                    ) : (
                        <div class="img-detail-wrapper">
                            <Zoom>
                                <Img fluid={ilustration.childImageSharp.fluid} style={{ borderRadius: 3 }} />
                            </Zoom>
                        </div>
                    )
                // <Slider initialImgNode={ilustration} edges={data.othersIlustrations.edges} />
                // <Grid data={data.othersIlustrations} location={location} animate />  
            }
            <p className="pCurrentName"> {ilustration.name}</p>
        </div >
    )
}
export const query = graphql`
    query($name: String!) {
       
    othersIlustrations:allFile(filter: {name: {ne: $name}, relativeDirectory: {eq: "io/ioMedium"}}) {
            edges {
                node {
                    name
                    base
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                        id
                    }
                }
            }
        }
    
    selectIlustration:allFile(filter: {name: {eq: $name}, relativeDirectory: {eq: "io/ioLarge"}}) {
            edges {
                node {
                    relativePath
                    name
                    base
						childImageSharp {
							fluid(maxWidth:1800) {
								...GatsbyImageSharpFluid
								originalName
							}
							id
						}
                }
            }
        }
    }
  `