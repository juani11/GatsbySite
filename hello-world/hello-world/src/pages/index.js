import React from "react"
import { useStaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image" // to take image data and render it
import { chunk } from 'lodash';

const Index = () => {

  const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "io/ioLarge" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`)



  const columns = chunk(data.allFile.edges.map(image => ({
    ...image.node.childImageSharp.fluid
  })), 7);

  console.log(columns);

  return (
    <div className="row">
      {columns.map(column => {
        return (
          <div className="column">
            {column.map(image =>
              <Img fluid={image} 
              style={{
                marginTop: "8px",
                verticalAlign: "middle",
                width:"100%"
              }}/>
            )}
          </div>)
      })}
    </div>
  );
}

export default Index;
/*
export const query = graphql`
  query {
    file(relativePath: { eq: "io/ioSlide/Atrapasueños.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2976) {
      # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
      ...GatsbyImageSharpFluid_noBase64
    }
      }
    }
  }
`
export const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "io/ioLarge" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)

export default ({ data }) => (
  data.allFile.edges.map(image => (
    <Img
      fluid={image.node.childImageSharp.fluid}
      alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
    />
  ))
)

*/