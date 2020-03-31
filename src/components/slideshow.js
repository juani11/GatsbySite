import React, { } from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Container, Row, Col } from 'reactstrap';
import './slideshow.css'

function SlideShow() {

    const { allFile } = useStaticQuery(
        graphql`
            query {
                allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}  relativeDirectory: {eq:"io/ioSlide"}}) {
                    edges {
                        node {
                            id
                            name
                            childImageSharp {
                                fluid(maxWidth:1600){
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
                    id={allFile.edges[1].node.id}
                    role="img"
                    aria-label={allFile.edges[1].node.name}
                    style={{
                        backgroundPosition: "85% 90%"
                    }}
                />
            </li>
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[2].node.childImageSharp.fluid}
                    id={allFile.edges[2].node.id}
                    role="img"
                    aria-label={allFile.edges[2].node.name}
                    preserveStackingContext={true}
                />
            </li>
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[3].node.childImageSharp.fluid}
                    id={allFile.edges[3].node.id}
                    role="img"
                    aria-label={allFile.edges[3].node.name}
                    preserveStackingContext={true}
                />
            </li>
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[4].node.childImageSharp.fluid}
                    id={allFile.edges[4].node.id}
                    role="img"
                    aria-label={allFile.edges[4].node.name}
                    preserveStackingContext={true}
                />
            </li>
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[5].node.childImageSharp.fluid}
                    id={allFile.edges[5].node.id}
                    role="img"
                    aria-label={allFile.edges[5].node.name}
                    preserveStackingContext={true}
                />
            </li>
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[6].node.childImageSharp.fluid}
                    id={allFile.edges[6].node.id}
                    role="img"
                    aria-label={allFile.edges[6].node.name}
                    preserveStackingContext={true}
                />
            </li>
            <li>
                <BackgroundImage
                    Tag="section"
                    fluid={allFile.edges[7].node.childImageSharp.fluid}
                    id={allFile.edges[7].node.id}
                    role="img"
                    aria-label={allFile.edges[7].node.name}
                    preserveStackingContext={true}
                />
            </li>
            <Container>
                <header id="logoWeb">
                    <h1>
                        <span className="brand">
                            <img src="layoutImgs/logo2.png" width="300" height="75" />
                        </span>
                    </h1>
                </header>
            </Container>
            <Container id="logoResp" style={{ display: "none" }}>
                <Row>
                    <Col md="12">
                        <div className="wrapper">
                            <img src="layoutImgs/logo2.png" width="300" height="75" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SlideShow