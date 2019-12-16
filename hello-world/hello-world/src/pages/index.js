import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import IlustrationsGrid from "../components/IlustrationsGrid";
import Layout from "../components/layout";

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
		<Layout>
			<IlustrationsGrid data={data.allFile}/>
		</Layout>
	);
}

export default Index;
