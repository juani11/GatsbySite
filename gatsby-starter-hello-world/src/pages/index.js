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
                            fluid(background:"rgb(240, 196, 80)"){
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
            <div className="qztBA">
            {columns.map(column => {
                return (
                    <div className="column">
                        {column.map(image => {
                            return (
                                <div className="imgIl">
                                    <Img fluid={image} backgroundColor={"rgb(240, 196, 80)"}></Img>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
            </div>
        </div>
    );
}

export default Index;