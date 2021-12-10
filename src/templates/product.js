import React, { useState, useEffect } from "react"

import {
    Container,
    FormGroup,
    Input,
} from 'reactstrap';
import { Button, Grid, Image, Select, Label } from "semantic-ui-react";

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
    const { product } = pageContext
    const { options, variants } = product;

    console.log('Informacion del producto...');
    console.log(product);


    const handleClickLabel = (e, optionId) => {
        console.log("click label..", e.target.name);
        const valueOfOptionSelected = e.target.name;

        setProductVariantSelected({
            ...productVariantSelected,
            [optionId]: valueOfOptionSelected
        })

        let possibleOtherOptionsForOptionId = {};
        variants.map(({ options }) => {

            //Si la opcion elegida está dentro de las opciones de la variante, la proceso y me fijo las otras opciones posibles para la opcion (la formacion de la variante)
            if (options.some(o => o.id === optionId && o.value === valueOfOptionSelected)) {

                const possibleOptions = options.filter(o => o.value != valueOfOptionSelected)
                possibleOptions.map(po => {
                    const copy = (possibleOtherOptionsForOptionId[po.id]) ? [...possibleOtherOptionsForOptionId[po.id]] : []
                    copy.push(po.value);

                    possibleOtherOptionsForOptionId[po.id] = copy;
                })
            }

        })

        setPossibleOptionsToSelect({
            ...possibleOptionsToSelect,
            ...possibleOtherOptionsForOptionId
        });


    }

    const [productVariantSelected, setProductVariantSelected] = useState({

        /**
         * "[optionId]":"35x50",
         * "[optionId]":"white"",
        */
    });
    const [possibleOptionsToSelect, setPossibleOptionsToSelect] = useState({});


    let checker = (arr, target) => target.every(v => arr.includes(v));

    useEffect(() => {
        //Si la cantidad de opciones que se seleccionaron es igual a la maxima cantidad de opciones posibles, entonces busco el precio de la variante formada
        if (options.length === Object.keys(productVariantSelected).length) {
            const productVariantFind = variants.find(({ options }) => {

                const valuesOptions = options.map(({ value }) => value)

                return checker(valuesOptions, Object.values(productVariantSelected))
            })

            setPrice(productVariantFind.price)
        }
    }, [productVariantSelected]);

    const [price, setPrice] = useState(product.regular_price)

    return (

        <Container>
            <Grid columns={2} stackable >
                <Grid.Column>
                    <Image src='https://www.worldloppet.com/wp-content/uploads/2018/10/no-img-placeholder.png' />
                </Grid.Column>
                <Grid.Column>
                    <div>
                        <p className="product-name">{product.name}</p>
                        <p className="product-description"> {product.description}</p>
                        <p className="product-category ant-tag ant-tag-purple"> {product.category.name}</p>
                        <p className="product-price"> {`$ ${price}`}</p>

                        {options && options.map(o =>
                            <>
                                <p for="product-option">{o.name}</p>
                                <div className="product-variants" style={{ marginBottom: "10px" }}>
                                    {o.possibleValues.map((value, index) =>
                                        <Label
                                            as='a'
                                            basic
                                            id={index}
                                            name={value}
                                            onClick={(e) => handleClickLabel(e, o.id)}
                                            className={
                                                productVariantSelected[o.id] &&
                                                    productVariantSelected[o.id] === value ? 'product-variant-selected' :

                                                    possibleOptionsToSelect[o.id] &&
                                                        !possibleOptionsToSelect[o.id].includes(value) ? 'product-variant-unavailable' : null
                                            }>
                                            {value}
                                        </Label>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                    <Button >Agregar al carrito</Button>
                </Grid.Column>
            </Grid>
        </Container >
    )
}
