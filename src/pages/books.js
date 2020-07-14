import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import BookGrid from "../components/grid";

const Books = (location) => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"} relativeDirectory: {eq:"io/ioBooks"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
            id
          }
        }
      }
    }
  }
`)

  return (
    <BookGrid data={data.allFile} location={location} columnsMobile={1} detail={false} />
  );
}

export default Books;
