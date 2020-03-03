import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout";

const Bio = () => {
    const data = useStaticQuery(graphql`
		query {
			allFile(filter: {name: {eq: "bioSmall"}}) {
				edges {
					node {
						base
						childImageSharp {
							fluid(maxWidth: 1250) {
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
            <div className="container" id="Bio" style={{ maxWidth: "1250px" }}>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="wrapper">
                                    <img src="layoutImgs/bioSmall.png" class="img-fluid comElement"></img>
                                    {/*<Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} durationFadeIn={1200} />*/}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="description">
                                    <b>Formación</b>
                                    <p>Graduada de la
                                            <b>UNLP</b> como
                                            <b>Diseñadora en comunicación visual</b>. Estudié
                                            <b>ilustración en el Sótano Blanco</b> con Rocío Alejandro, Jimena Tello,
                                            Mariana Ruiz
                                            Johnson y Gabriela Burín, y más adelante con José Sanabria. Hoy continúo mi
                                            formación
                                            junto a Christian Mazzuca. He recibido el 1er premio adquisición, categoría
                                            estudiante,
                                            del Salón de ilustración del MUMART, en el año 2014. Ese mismo año recibí el 1er
                                            premio por otra ilustración en la convocatoria de Arte Joven, de la
                                            municipalidad
                                            de La Plata. Actualmente trabajo como ilustradora en Amblagar studio y como
                                            ilustradora
                                            freelance. Desde el año 2017 pertenezco a <a
                                            href="https://adadibujantesdeargentina.org/proyectos/maria-julia-tagliero/"
                                            target="_blank">ADA</a> (Asociación de Dibujantes Argentinos).
                                        </p>

                                    <b>Visión</b>
                                    <p> Nací el 26 de Junio de 1989 en la ciudad de La Plata, Buenos Aires, Argentina.
                                        Desde
                                        mis primeros años de vida empecé a disfrutar de la pintura, junto con mi abuela.
                                        De allí en adelante continué haciéndolo hasta el día de hoy con gran entusiasmo.
                                        Me encanta trabajar con témpera, lápices y óleo pastel, o imitando la técnica
                                        digitalmente.
                                        En mi transcurso por la carrera de Diseño en comunicación visual conocí los
                                        <b> libros álbumes</b>, y noté el valor y el poder que pueden tener. Es por eso
                                        que elegí enfocar mi gusto por pintar y por experimentar con el color, en esta disciplina
                                        en particular.
                                        <b>Considero que un libro en la manos de un niño es un alimento que si tiene
                                        contenido y calidad estética lo puede nutrir mucho </b>. Aspiro realmente a, como
                                        ilustradora, poder colaborar a que quien mire se pregunte cosas, a que desarrolle su
                                        conciencia y juicio propio, así como también a propiciar la aceptación y entendimiento del
                                        otro, a través de imágenes e imaginación.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
		</Layout>
    );
}

export default Bio;