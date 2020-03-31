import React, { } from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Container, Row, Col } from 'reactstrap';
import './slideshow.css'
import logoImg from '../images/layoutImgs/logo.png'

function SlideShow() {

    const { allFile } = useStaticQuery(
        graphql`
            query {
                allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}  relativeDirectory: {eq:"io/ioSlide"}},sort: {fields: name}) {
                    edges {
                        node {
                            id
                            name
                            childImageSharp {
                                fixed(width:1800){
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    const BGImageItem = (props) => {
        const { indx, position } = props;
        return (
            <li>
                <BackgroundImage
                    Tag="section"
                    fixed={allFile.edges[indx].node.childImageSharp.fixed}
                    id={allFile.edges[indx].node.id}
                    role="img"
                    aria-label={allFile.edges[indx].node.name}
                    style={position ? { backgroundPosition: position } : {}}
                />
            </li>
        )
    }



    return (
        <div id="slideshowbg" style={styles.fullBG} >
            <BGImageItem indx={3} position={"40% 30%"} />
            <BGImageItem indx={5} /*position={"85% 90%"}*/ />
            <BGImageItem indx={4} position={"20% 14%"} />
            <BGImageItem indx={0} position={"70% 50%"} />
            <BGImageItem indx={6} position={"88% 50%"} />
            <BGImageItem indx={1} position={"10% 50%"} />
            <BGImageItem indx={2} />
            <Container>
                <header id="logoWeb">
                    <h1>
                        <span className="brand">
                            <img src={logoImg} width="300" height="75" alt="Maria Julia Tagliero" />
                        </span>
                    </h1>
                </header>
            </Container>
            <Container id="logoResp" style={{ display: "none" }}>
                <Row>
                    <Col md="12">
                        <div className="wrapper">
                            <img src={logoImg} width="300" height="75" alt="Maria Julia Tagliero" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const styles = {
    fullBG: {
        "width": "100%",
        "height": "100vh",
        "overflow": "hidden",
        "display": "flex",
    }
}

export default SlideShow