import React from "react"
import { useStaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image" // to take image data and render it
import { chunk } from 'lodash';

const Index = () => {

	const data = useStaticQuery(graphql`
		query {
			allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"} relativeDirectory: {eq:"prueba"}}) {
				edges {
					node {
						base
						childImageSharp {
							fluid(maxWidth: 800) {
								...GatsbyImageSharpFluid
							}
							id
						}
					}
				}
			}
		}
	`)



	const columns = chunk(data.allFile.edges.map(image => ({
		...image.node.childImageSharp
	})), 4);
	return (
		<div className="container">
			{columns.map(column => {
				return (
					<div className="column">
						{column.map(image =>
							<div className="img-wrapper" key={image.id} >
								<Img fluid={image.fluid} backgroundColor={"rgb(0, 0, 0,0.7)"} />
							</div>
						)}
					</div>
				)
			})}
		</div>
	);
}

export default Index;
