import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { chunk } from 'lodash';
import IlustrationsGrid from "../components/IlustrationsGrid";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

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

	//Separo el arreglo de imagenes retornado por la query en un arreglo de arreglos . donde cada arreglo tiene como maximo 4 imagenes. 
	//Por ej: Si el arreglo que devuelve la query tiene 20 imagenes, se separa el arreglo en un arreglo con 5 arreglos(cada uno con 4 elementos)
	const columns = chunk(data.allFile.edges.map(image => ({
		...image.node.childImageSharp
	})), 4);

	return (
		<div>
			<Navbar/>
			<IlustrationsGrid data={columns} />
			<Footer />
		</div>
	);
}

export default Index;
