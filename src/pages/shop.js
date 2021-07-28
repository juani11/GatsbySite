import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { CartContext } from "../context/cartContext"
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
                        price
                        category {
                            id
                            name
                        }
                    }
                }
            }
        }
	`)

    return (
        <div className="container" id="Shop" style={{ maxWidth: "1250px" }}>
            <section>
                <h4 style={{ textAlign: "center" }}>Shop page!</h4>
                <div className="container">
                    <div className="row">
                        {data.allCommerceProduct.edges.map((nodeProduct) => {
                            const { node: product } = nodeProduct;
                            return (
                                <ShopItem key={product.id} product={product} />
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Shop;