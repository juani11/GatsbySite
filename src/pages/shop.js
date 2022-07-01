import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Grid } from "semantic-ui-react"

import ShopItem from "../components/shopItem"


const Shop = () => {
    const data = useStaticQuery(graphql`
    	query {
            allCommerceProduct {
                edges {
                    node {
                        id
                        name
                        description
                        regular_price
                        category {
                            id
                            name
                        }
                    }
                }
            }
            allCommerceProductImagesJson {
                edges {
                    node {
                        title
                        mainImage {
                            src {
                                childImageSharp {
                                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                                }
                            }
                        }
                    }
                }
            }
        }
    `)


    console.log('Shop Data...');
    console.log(data.allCommerceProduct.edges);

    const allCommerceProductMainImage = data.allCommerceProductImagesJson.edges;


    return (
        <div className="container" id="Shop" style={{ maxWidth: "1250px" }}>
            <section>
                {/* <h4 style={{ textAlign: "center" }}>Shop page!</h4> */}
                <Grid columns={3} stackable>
                    {data.allCommerceProduct.edges.map((nodeProduct) => {
                        const { node: productNode } = nodeProduct;

                        //Busco la imagen de portada del producto actual dentro del resultado de la query allCommerceProductImagesJson
                        const { node: { mainImage } } = allCommerceProductMainImage.find(({ node }) => node.title === productNode.name)

                        const product = {
                            ...productNode,
                            mainImage
                        }

                        return (
                            <Grid.Column key={product.id}>
                                <ShopItem product={product} />
                            </Grid.Column>
                        )
                    })}
                </Grid>
            </section>
        </div>
    );
}

export default Shop;