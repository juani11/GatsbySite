import React,{useRef,useEffect} from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "./detail.css"

import { Magnifier, MagnifierContainer, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from 'react-image-magnifiers'
import PageTransition from 'gatsby-plugin-page-transitions';


const scrollToRef = (ref) => window.scrollTo({ behavior: "auto",top: ref.current.offsetTop})   

export default ({ data }) => {

    const ilustration = data.selectIlustration.edges[0].node

    
    const detailStyle = {
        textAlign: "center",
        fontFamily: "raleway"
    }

    const refDetail = useRef(null)

    useEffect(() => {
        scrollToRef(refDetail)
    }, []);


    return (

        <div  ref={refDetail}>
            <div className="detailBrand" style={{ textAlign: "center" }}>
                <img src="layoutImgs/logob.png" width="200" height="42" alt="Maria Julia Tagliero" />
            </div>
            <PageTransition transitionTime={450}>
                <div className="img-detail-wrapper">
                    {/*<Img fluid={ilustration.childImageSharp.fluid} durationFadeIn={1200} />*/}
                    <MagnifierContainer title="Side By Side Magnifier" >
                        <Magnifier
                            className="input-position"
                            imageSrc={`io/ioMedium/20.jpg`}
                            largeImageSrc={`io/ioLarge/20.jpg`}
                            mouseActivation={MOUSE_ACTIVATION.SINGLE_CLICK} // Optional
                            touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
                        />
                    </MagnifierContainer>
                </div>
            </PageTransition>
            {/*
            <h5 style={detailStyle}> OTHERS ILUSTRATIONS</h5>
            <IlustrationsGrid data={data.othersIlustrations}/>*/}
        </div>


    )
}
export const query = graphql`
    query($name: String!) {
       
    othersIlustrations:allFile(filter: {name: {ne: $name}, relativeDirectory: {eq: "prueba"}}) {
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
    
    selectIlustration:allFile(filter: {name: {eq: $name}, relativeDirectory: {eq: "prueba"}}) {
            edges {
                node {
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