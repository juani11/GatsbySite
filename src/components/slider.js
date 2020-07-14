import React, { useState, useEffect } from 'react';
import Img from "gatsby-image"
import { Container, Row, Col, Button, Fade } from "reactstrap";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

//Slider de Imagenes. Puede ser utilizado para ilustraciones o books. 
//El state current representa un node, obtenido en el componente que invoca al slider, mediante GraphQL.

const Slider = (props) => {
  const { initialImgNode, edges } = props;
  const [current, setCurrent] = useState(initialImgNode);
  const [prevNext, setPrevNext] = useState(-1);

  const [fadeIn, setFadeIn] = useState(true);

  const pCurrentName = {
    textAlign: "center",
    fontFamily: "Raleway, sans-serif;",
    fontSize: 42,
    fontWeight: 200,
    padding: 40,
    marginBottom: 200,
    textTransform: 'uppercase'
  }


  useEffect(() => {
    prevNext !== -1 && setCurrent(edges[prevNext].node)
  }, [prevNext]);

  function FadeImg({ current }) {
    return (
      <Fade in={fadeIn} tag="div" className="mt-3" transitionEnterTimeout={300} transitionLeaveTimeout={800}>
        <Zoom>
          <Img fluid={current.childImageSharp.fluid} style={{ borderRadius: 3 }} />
        </Zoom>
      </Fade>
    )
  }

  return (
    <Container>
      <Row>
        <Col md="3" className="wrapper">
          {(prevNext > 0) &&
            <Button outline color="danger" onClick={() => setPrevNext(prevNext - 1)}> ANT</Button>
          }
        </Col>
        <Col md="6" className="img-detail-wrapper">
          {/* <Img fluid={current.childImageSharp.fluid} style={{ borderRadius: 3 }} /> */}
          <FadeImg current={current} />
        </Col>
        <Col md="3" className="wrapper">
          {(prevNext < (edges.length - 1)) &&
            < Button outline color="danger" onClick={() => setPrevNext(prevNext + 1)}> SIG</Button>
          }
        </Col>
      </Row>
      <p style={pCurrentName}> {current.name}</p>
    </Container >
  );
}

export default Slider;
