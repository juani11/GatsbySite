import React from "react"
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image"

import { Grid } from "semantic-ui-react";

import ProductImages from "../components/product-images/product-images.component";
import ProductInfo from "../components/product-info/product-info.component";

import "./product.css"


export default ({ pageContext, data }) => {
    /** Info de objeto product en pageContext
     * 
     *  
        {
          id
          name
          description
          regular_price
          category {
            id
            name
          }
          options {
            id
            name
            possibleValues
          }
          variants {
            id/sku
            price
            options {
              name
              value
            }
          }
        }
      }
      }
     */

    const { product } = pageContext

    console.log('Informacion del producto...');
    console.log(product);

    console.log('Informacion de las imagenes del producto usando useStaticQuery ...');
    console.log(data.allFile);

    const productMainImage = getImage(data.allFile.edges[0].node)

    return (
        <section>
            <Grid columns={2} stackable  >
                <Grid.Column width={10}>
                    <ProductImages images={data.allFile.edges} />
                </Grid.Column>
                <Grid.Column width={6} >
                    <ProductInfo product={product} productMainImage={productMainImage} />
                </Grid.Column>
            </Grid>
        </section>
    )
}

//Obtengo las imagenes del producto..
export const query = graphql`
    query productImages($dirName:String!) {
        allFile(filter: {relativeDirectory: {eq: $dirName}} sort: {fields: name, order: ASC}) {
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
`