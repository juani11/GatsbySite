import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { chunk } from 'lodash';
import '../styles/styles.css'

const Index = () => {

    const staticQ = useStaticQuery(graphql`
        query {
            allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
                edges {
                    node {
                        childImageSharp {
                            fluid{
                                ...GatsbyImageSharpFluid
                            }
                        }
                        relativePath
                    }
                }
            }
        }    
    `);

    console.log(staticQ);
    const columns = chunk(
        staticQ.allFile.edges.map(image => ({
            ...image.node.childImageSharp.fluid
        })), 3);

    console.log(columns);
    return (
        <div className="container">
            {columns.map(column => {
                return (
                    <div className="column">
                        {column.map(image => {
                            return (
                                <Img fluid={image}></Img>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Index;