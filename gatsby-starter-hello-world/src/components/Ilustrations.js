import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { chunk } from 'lodash';
import { Link } from "gatsby"

const Ilustrations = () => {
    const staticQ = useStaticQuery(graphql`
        query {
            allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
                edges {
                    node {
                        childImageSharp {
                            fluid(background:"rgb(240, 196, 80)"){
                                ...GatsbyImageSharpFluid
                                originalName
                            }
                        }
                    }
                }
            }
        }    
    `);
    const columns = chunk(
        staticQ.allFile.edges.map(image => ({
            ...image.node.childImageSharp.fluid
        })), 3);

    return (
        <div className="container">
            {columns.map(column => {
                console.log(column)
                return (
                    <div className="column">
                        {column.map(image => {
                            const imgLink = '/' + (image.originalName).split(".")[0]
                            return (
                                <div className="img-wrapper">
                                    <Link to={imgLink}>
                                        <Img fluid={image} backgroundColor={"rgb(240, 196, 80)"}></Img>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Ilustrations;