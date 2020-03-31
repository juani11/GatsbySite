import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import IlustrationsGrid from "../components/IlustrationsGrid";

const Index = ({ location }) => {

	const data = useStaticQuery(graphql`
		query {
			allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"} relativeDirectory: {eq:"io/ioMedium"}}) {
				edges {
					node {
						base
						childImageSharp {
							fluid(maxWidth: 1200) {
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
		<IlustrationsGrid data={data.allFile} location={location} animate />
	);
}

export default Index;
