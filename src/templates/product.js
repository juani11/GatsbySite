import React, { useState } from "react"

import {
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

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
    //const [variantOtion, setVariantOtion] = useState(variants[0].options[0]);

    const [selectedVariants, setSelectedVariants] = useState();

    const handleChangeVariantOption = (variantId, e) => {
        const variantOptionSelected = (variants.filter(v => v.id == variantId)[0]).options
            .filter(v => v.value == e.target.value)[0];

        setSelectedVariants({
            ...selectedVariants,
            [variantId]: {
                ...variantOptionSelected
            }
        })

    }

    const getOptionValues = optionId => {

        let optionValues = [];
        variants.map(({ options }) => {

            const findOption = options.find(o => o.id === optionId)
            if (findOption)
                optionValues.push(findOption.value)

        })
        return optionValues;
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <img src="https://www.worldloppet.com/wp-content/uploads/2018/10/no-img-placeholder.png" height='400' width='550'></img>
                    </div>
                </div>

                <div className="col-md-6">
                    <div>
                        <p className="product-name">{product.name}</p>
                        <hr />
                        <p className="product-description"> {product.description}</p>
                        <p className="product-category ant-tag ant-tag-purple"> {product.category.name}</p>
                        <p className="product-price"> {selectedVariants ? '$' + selectedVariants[1].price : '$' + product.regular_price}</p>

                        {options && options.map(o =>
                            <FormGroup key={o.id}>
                                <Label for="option">{o.name}</Label>
                                <Input type="select" name="option" id="variantOption" onChange={(e) => handleChangeVariantOption(o.id, e)}>
                                    {getOptionValues(o.id).map(ov =>
                                        <option key={ov}>{ov}</option>
                                    )}
                                    {/* {variants.map(vo =>
                                        <option key={vo.sku}>{vo.value}</option>
                                    )} */}
                                </Input>
                            </FormGroup>
                        )}
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
