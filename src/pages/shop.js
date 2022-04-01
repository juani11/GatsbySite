import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ShopItem from "../components/shopItem"
import { Grid } from "semantic-ui-react"


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
                <h4 style={{ textAlign: "center" }}>Shop page!</h4>
                <div className="container">
                    <Grid columns={3} stackable>
                        <Grid.Row>
                            {/* <div className="row"> */}
                            {data.allCommerceProduct.edges.map((nodeProduct) => {
                                const { node: productNode } = nodeProduct;

                                //Busco la imagen de portada del producto actual dentro del resultado de la query allCommerceProductImagesJson
                                const { node: { mainImage: commerceProductMainImage } } = allCommerceProductMainImage.find(({ node }) => node.title === productNode.name)

                                const product = {
                                    ...productNode,
                                    mainImage: commerceProductMainImage
                                }

                                return (
                                    <Grid.Column>
                                        <ShopItem
                                            key={product.id}
                                            product={product}
                                        />
                                    </Grid.Column>
                                )
                            })}
                            {/* </div> */}
                        </Grid.Row>
                    </Grid>
                </div>
            </section>
        </div>
    );
}

export default Shop;