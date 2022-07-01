import React, { useState } from "react";
import { Button, Grid } from "semantic-ui-react";
import { useCartContext } from "../../hooks/useCartContext";
import ProductAddedAlert from "../product-added-alert/product-added-alert.component";
import ProductOptions from "../product-options/product-options.component";

const ProductInfo = ({ product, productMainImage }) => {

    console.log("product info");
    const context = useCartContext()

    const [selectedOptions, setSelectedOptions] = useState({
        /**
         * "[optionId]":"35x50",
         * "[optionId]":"white"",
        */
    });

    const [productVariantFormed, setProductVariantFormed] = useState({
        price: product.regular_price
    })

    const [visible, setVisible] = useState(false)


    const allOptionsSelected = () => product.options.length === Object.keys(selectedOptions).length


    const handleAddToCart = () => {
        context.addItemToCart({
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

    return (

        <div id="product-info">
            <div className="product">
                <p className="product-category ant-tag ant-tag-purple"> {product.category.name}</p>
                <h1 className="product-name">{product.name}</h1>
                <h2 className="product-price"> {`$${productVariantFormed.price}`}</h2>
                <p className="product-description"> {product.description}</p>

                {product.options &&
                    <ProductOptions
                        options={product.options}
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                        variants={product.variants}
                        setProductVariantFormed={setProductVariantFormed}
                        allOptionsSelected={allOptionsSelected}
                    />
                }
            </div>
            <Grid columns={1}>
                <Grid.Column mobile={16} tablet={16} computer={8}>
                    <Button fluid className="product-addToCart"
                        onClick={handleAddToCart}
                        disabled={!allOptionsSelected() || visible}>
                        Agregar al carrito
                    </Button>
                    <ProductAddedAlert visible={visible} />
                </Grid.Column>
            </Grid>

            <div style={{ marginTop: "30px" }}>
                <h3>Pago</h3>
                <p>Qui magna consequat aute deserunt incididunt consequat commodo culpa labore voluptate dolor.</p>
                <p>Excepteur tempor enim sunt in mollit.</p>
            </div>

            <div style={{ marginTop: "30px" }}>
                <h3>Información de Envío</h3>
                <p>Qui magna consequat aute deserunt incididunt consequat commodo culpa labore voluptate dolor.</p>
                <p>Excepteur tempor enim sunt in mollit.</p>
            </div>
        </div>
    );
}

export default ProductInfo;