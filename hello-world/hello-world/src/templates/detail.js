import React from "react"
import { graphql } from "gatsby"
import IlustrationsGrid from "../components/IlustrationsGrid";
import Img from "gatsby-image"
import "./detail.css"
import Footer from "../components/footer";

export default ({ data }) => {

    const ilustration = data.selectIlustration.edges[0].node

    const detailStyle={
        textAlign: "center",
        fontFamily:"raleway"
    }

    return (
        <div>
            <h3 style={detailStyle}>{ilustration.name}</h3>
            <div className="img-detail-wrapper">
                <Img fluid={ilustration.childImageSharp.fluid} backgroundColor={"rgb(0, 0, 0,0.7)"} durationFadeIn={1200} />
            </div>
            <h2 style={detailStyle}>OTRAS ILUSTRACIONES</h2>
            <IlustrationsGrid data={data.othersIlustrations}/>
            <Footer/>
        </div>

    )
}
export const query = graphql`
    query($name: String!) {
       
    othersIlustrations:allFile(filter: {name: {ne: $name}, relativeDirectory: {eq: "prueba"}}) {
            edges {
                node {
                    name
                    base
						childImageSharp {
							fluid(maxWidth: 800) {
								...GatsbyImageSharpFluid
								originalName
							}
							id
						}
                }
            }
        }
    
    selectIlustration:allFile(filter: {name: {eq: $name}, relativeDirectory: {eq: "prueba"}}) {
            edges {
                node {
                    name
                    base
						childImageSharp {
							fluid(maxWidth:1800) {
								...GatsbyImageSharpFluid
								originalName
							}
							id
						}
                }
            }
        }
    }
  `