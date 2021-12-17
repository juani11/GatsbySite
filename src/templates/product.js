import React, { useState, useEffect, useContext } from "react"

import { Container } from 'reactstrap';
import { Button, Grid, Image, Label } from "semantic-ui-react";

import { CartContext } from "../context/cart/cart.context";

import ProductOption from "../components/product-option/product-option.component";

import "./product.css"

export default ({ pageContext }) => {
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
            description: product.description
        })
    }

    const allOptionsSelected = () => options.length === Object.keys(selectedOptions).length


    return (
        <Container>
            <section>

                <Grid columns={2} stackable >
                    <Grid.Column>
                        <Image src='https://www.worldloppet.com/wp-content/uploads/2018/10/no-img-placeholder.png' />
                    </Grid.Column>
                    <Grid.Column >
                        <div className="product">
                            <h1 className="product-name">{product.name}</h1>
                            {/* <Label color="purple">{product.category.name}</Label> */}
                            <p className="product-category ant-tag ant-tag-purple"> {product.category.name}</p>
                            <h2 className="product-price"> {`$ ${productVariantFormed.price}`}</h2>
                            <p className="product-description"> {product.description}</p>

                            {options && options.map(o =>
                                <>
                                    <p className="product-option-name">{o.name}</p>
                                    <div className="product-option-possibleValues">
                                        {o.possibleValues.map(value =>
                                            <ProductOption
                                                option={{ id: o.id, value }}
                                                className={optionClassName}
                                                handleClick={handleClickLabel}
                                            />
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                        <Button className="product-addToCart" onClick={handleAddToCart} disabled={!allOptionsSelected()}>Agregar al carrito</Button>
                    </Grid.Column>
                </Grid>
            </section>

        </Container >
    )
}
