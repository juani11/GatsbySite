import React from "react"
import "./product.css"

export default ({ pageContext }) => {
    const { product } = pageContext
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
                        <p className="product-price"> ${product.price}</p>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
