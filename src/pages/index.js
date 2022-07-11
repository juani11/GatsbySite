import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import IlustrationsGrid from "../components/grid";

const Index = ({ location }) => {

	const data = useStaticQuery(graphql`
		query {
			allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"} relativeDirectory: {eq:"io/ioMedium"}}) {
				edges {
					node {
						name
						childImageSharp {
							gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
						}
					}
				}
			}
		}
	`)



	return (
		<IlustrationsGrid data={data.allFile} location={location} columnsMobile={1} detail />
	);
}

export default Index;
