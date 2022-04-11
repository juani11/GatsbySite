import React, { useState, useEffect, useContext, Fragment } from "react"
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image"

import { Container } from 'reactstrap';
import { Button, Grid } from "semantic-ui-react";

import { CartContext } from "../context/cart/cart.context";

import ProductOption from "../components/product-option/product-option.component";
import ProductAddedAlert from "../components/product-added-alert/product-added-alert.component";

import ProductImages from "../components/product-images/product-images.component";
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

    const { addItemToCart } = useContext(CartContext);

    const { product } = pageContext
    const { options, variants } = product;

    console.log('Informacion del producto...');
    console.log(product);


    console.log('Informacion de las imagenes del producto usando useStaticQuery ...');
    console.log(data.allFile);
    const productMainImage = getImage(data.allFile.edges[0].node)


    const [productVariantFormed, setProductVariantFormed] = useState({
        price: product.regular_price
    })

    const [selectedOptions, setSelectedOptions] = useState({
        /**
         * "[optionId]":"35x50",
         * "[optionId]":"white"",
        */
    });
    const [availableOptions, setAvailableOptions] = useState({});


    let checker = (arr, target) => target.every(v => arr.includes(v));


    useEffect(() => {
        //Si la cantidad de opciones que se seleccionaron es igual a la maxima cantidad de opciones posibles, entonces busco el precio de la variante formada
        if (options && allOptionsSelected()) {
            const productVariantFind = variants.find(({ options }) => {
                const valuesOptions = options.map(({ value }) => value)
                return checker(valuesOptions, Object.values(selectedOptions))
            })
            setProductVariantFormed({ ...productVariantFind })
        }
    }, [selectedOptions]);

    const optionClassName = (optionId, optionValue) => {
        if (selectedOptions[optionId] &&
            selectedOptions[optionId] === optionValue) return 'product-option-selected'

        if (availableOptions[optionId] &&
            !availableOptions[optionId].includes(optionValue)) return 'product-option-unavailable'

        return null
    }

    const handleClickLabel = (e, optionId) => {
        const selectedOptionValue = e.target.name;

        setSelectedOptions({
            ...selectedOptions,
            [optionId]: selectedOptionValue
        })

        let otherAvailableOptionsForOptionId = {};
        variants.map(({ options }) => {

            //Si la opcion elegida está dentro de las opciones de la variante, la proceso y me fijo las otras opciones posibles para la opcion (la formacion de la variante)
            if (options.some(o => o.id === optionId && o.value === selectedOptionValue)) {

                const possibleOptions = options.filter(o => o.value != selectedOptionValue)
                possibleOptions.map(po => {
                    const copy = (otherAvailableOptionsForOptionId[po.id]) ? [...otherAvailableOptionsForOptionId[po.id]] : []
                    copy.push(po.value);

                    otherAvailableOptionsForOptionId[po.id] = copy;
                })
            }
        })

        setAvailableOptions({
            ...availableOptions,
            ...otherAvailableOptionsForOptionId
        });
    }

    const handleAddToCart = () => {
        addItemToCart({
            ...productVariantFormed,
            name: product.name,
            description: product.description,
            mainImage: productMainImage
        })
        setVisible(true);
        setTimeout(() => {
            setVisible(false)
        }, 2500);
    }

    const allOptionsSelected = () => options.length === Object.keys(selectedOptions).length

    const [visible, setVisible] = useState(false)


    return (
        <Container>
            <section>
                <Grid columns={2} stackable >
                    <Grid.Column>
                        {/* <GatsbyImage image={productImage} alt={product.name} /> */}
                        <ProductImages images={data.allFile.edges} />
                    </Grid.Column>
                    <Grid.Column >
                        <div className="product">
                            <h1 className="product-name">{product.name}</h1>
                            {/* <Label color="purple">{product.category.name}</Label> */}
                            <p className="product-category ant-tag ant-tag-purple"> {product.category.name}</p>
                            <h2 className="product-price"> {`$ ${productVariantFormed.price}`}</h2>
                            <p className="product-description"> {product.description}</p>

                            {options && options.map(o =>
                                <Fragment key={o.id}>
                                    <p className="product-option-name">{o.name}</p>
                                    <div className="product-option-possibleValues">
                                        {o.possibleValues.map(value =>
                                            <ProductOption
                                                key={value}
                                                option={{ id: o.id, value }}
                                                className={optionClassName}
                                                handleClick={handleClickLabel}
                                            />
                                        )}
                                    </div>
                                </Fragment>
                            )}
                        </div>
                        <Button className="product-addToCart"
                            onClick={handleAddToCart}
                            disabled={!allOptionsSelected() || visible}>
                            Agregar al carrito
                        </Button>
                        <ProductAddedAlert visible={visible} />
                    </Grid.Column>
                </Grid>
            </section>

        </Container >
    )
}

//Obtengo las imagenes del producto..
export const query = graphql`
    query productImages($dirName:String!) {
        allFile(filter: {relativeDirectory: {eq:$dirName}}) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                    }
                }
            }
        }
    }
`