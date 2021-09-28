import React, { useState } from "react"

import {
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

import "./product.css"

export default ({ pageContext }) => {
    const { product } = pageContext
    const { variants } = product;

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
                        <p className="product-price"> {selectedVariants ? '$' + selectedVariants[1].price : '$' + product.price}</p>

                        {variants && variants.map(v =>
                            <FormGroup key={v.id}>
                                <Label for="variant">{v.name}</Label>
                                <Input type="select" name="variant" id="variantOption" onChange={(e) => handleChangeVariantOption(v.id, e)}>
                                    {v.options.map(vo =>
                                        <option key={vo.sku}>{vo.value}</option>
                                    )}
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
