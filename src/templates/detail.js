import React, { useRef, useEffect } from "react"
import Img from "gatsby-image"
import ReactWOW from 'react-wow'
import { graphql } from "gatsby"
import { Magnifier, MagnifierContainer, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from 'react-image-magnifiers'
import IlustrationsGrid from "../components/IlustrationsGrid"
import '../styles/animate.css'
import "./detail.css"
const scrollToRef = (ref) => window.scrollTo({ behavior: "auto", top: ref.current.offsetTop })

export default ({ data, location }) => {
    const ilustration = data.selectIlustration.edges[0].node

    /*
    const detailStyle = {
        textAlign: "center",
        fontFamily: "raleway"
    }*/

    const refDetail = useRef(null)

    useEffect(() => {
        scrollToRef(refDetail)
    }, []);


    return (

        <div ref={refDetail}>
            { /* 
            <div className="detailBrand" style={{ top: 0, position: "sticky" }}>
                <img src="layoutImgs/logob.png" width="200" height="42" alt="Maria Julia Tagliero" />
          </div>*/  }
            <div className="img-detail-wrapper">
                {/*<Img fluid={ilustration.childImageSharp.fluid} durationFadeIn={1200} />*/}
                <MagnifierContainer title="Side By Side Magnifier" >
                    <Magnifier
                        className="input-position"
                        imageSrc={`io/ioMedium/${ilustration.name}.jpg`}
                        largeImageSrc={`io/ioLarge/${ilustration.name}.jpg`}
                        mouseActivation={MOUSE_ACTIVATION.SINGLE_CLICK} // Optional
                        touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
                    />
                </MagnifierContainer>
            </div>

            {/*
            <h5 style={detailStyle}> OTHERS ILUSTRATIONS</h5>
            <IlustrationsGrid data={data.othersIlustrations} location={location} animate={false} />*/}
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