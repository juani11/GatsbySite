
import React, { } from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import './slideshowbg.css'

function SlideShowBG() {

    const { allFile } = useStaticQuery(
        graphql`
            query {
                allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
                    edges {
                        node {
                            id
                            childImageSharp {
                                fluid(maxWidth:1200,maxHeight:1200){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    const fullBG = {
        "width": "100%",
        "height": "100vh",
        "overflow": "hidden",
        "display": "flex",

    }

    return (
        <div id="slideshowbg" style={fullBG} >
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[1].node.childImageSharp.fluid}
                    title="Art-Directed Fullscreen Background"
                    id={allFile.edges[1].node.id}
                    role="img"
                    aria-label="Art-Directed Fullscreen Background"
                    preserveStackingContext={true}

                />
            </li>
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[2].node.childImageSharp.fluid}
                    title="Art-Directed Fullscreen Background"
                    id={allFile.edges[2].node.id}
                    role="img"
                    aria-label="Art-Directed Fullscreen Background"
                    preserveStackingContext={true}
                />
            </li>
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[3].node.childImageSharp.fluid}
                    title="Art-Directed Fullscreen Background"
                    id={allFile.edges[3].node.id}
                    role="img"
                    aria-label="Art-Directed Fullscreen Background"
                    preserveStackingContext={true}
                />
            </li>
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[4].node.childImageSharp.fluid}
                    title="Art-Directed Fullscreen Background"
                    id={allFile.edges[4].node.id}
                    role="img"
                    aria-label="Art-Directed Fullscreen Background"
                    preserveStackingContext={true}
                />
            </li>
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[5].node.childImageSharp.fluid}
                    title="Art-Directed Fullscreen Background"
                    id={allFile.edges[5].node.id}
                    role="img"
                    aria-label="Art-Directed Fullscreen Background"
                    preserveStackingContext={true}
                />
            </li>
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[6].node.childImageSharp.fluid}
                    title="Art-Directed Fullscreen Background"
                    id={allFile.edges[6].node.id}
                    role="img"
                    aria-label="Art-Directed Fullscreen Background"
                    preserveStackingContext={true}
                />
            </li>
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[7].node.childImageSharp.fluid}
                    title="Art-Directed Fullscreen Background"
                    id={allFile.edges[7].node.id}
                    role="img"
                    aria-label="Art-Directed Fullscreen Background"
                    preserveStackingContext={true}
                />
            </li>
        </div>
    )
}

export default SlideShowBG