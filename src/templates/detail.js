import React, { useRef, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Magnifier, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from 'react-image-magnifiers'
import ReactWOW from 'react-wow'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { useWindowSize } from '../hooks/windowsSize';


import '../styles/animate.css'
import "./detail.css"

const scrollToRef = (ref) => window.scrollTo({ behavior: "auto", top: ref.current.offsetTop })

export default ({ data }) => {
    const ilustration = data.selectIlustration.edges[0].node
    const refDetail = useRef(null)

    const magnifierSrc = ilustration.childImageSharp.gatsbyImageData.images.fallback.src

    const { size } = useWindowSize();

    useEffect(() => {
        scrollToRef(refDetail)
    }, []);

    const ilustrationImage = getImage(ilustration)

    return (
        <div ref={refDetail}>
            {
                (size[0] <= 1224)
                    ? (
                        <ReactWOW animation='fadeIn' delay="0.4s" duration="0.3s">
                            <Magnifier
                                className="input-position"
                                imageSrc={magnifierSrc}
                                largeImageSrc={magnifierSrc}
                                mouseActivation={MOUSE_ACTIVATION.SINGLE_CLICK}
                                touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
                            />
                        </ReactWOW>

                    ) : (
                        <div className="img-detail-wrapper">
                            <Zoom>
                                <GatsbyImage image={ilustrationImage} alt={ilustration.name} style={{ borderRadius: 3 }} />
                            </Zoom>
                        </div>
                    )
            }
            <p className="pCurrentName"> {ilustration.name}</p>
        </div >
    )
}
export const query = graphql`
    query($name: String!) {
       
    selectIlustration:allFile(filter: {name: {eq: $name}, relativeDirectory: {eq: "io/ioLarge"}}) {
            edges {
                node {
                    relativePath
                    name
                    base
                    childImageSharp {
                        gatsbyImageData(width:1800, placeholder: BLURRED)
                    }
                }
            }
        }
    }
  `