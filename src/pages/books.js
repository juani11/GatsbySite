import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import BookGrid from "../components/grid";

const Books = (location) => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"} relativeDirectory: {eq:"io/ioBooks"}}) {
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
		<BookGrid data={data.allFile} location={location} columnsMobile={1} />
	);
}

export default Books;
