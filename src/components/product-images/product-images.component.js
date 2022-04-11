
import React, { useState } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./product-images.styles.css"

const ProductImages = ({ images }) => {

    const [indexCurrentImage, setIndexCurrentImage] = useState(0);

    const currentImage = getImage(images[indexCurrentImage].node);

    const handleClick = index => setIndexCurrentImage(index)

    return (
        <div>
            <div className="product-current-image">
                <GatsbyImage image={currentImage} alt={"sad"} />
            </div>
            <div className="product-small-images">
                <ul style={{ padding: "0px" }}>
                    {images.map((_, index) => {
                        const smalImage = getImage(images[index].node);
                        return (
                            <li className={`product-small-image ${index === indexCurrentImage && "selected-image"}`} >
                                <a onClick={() => handleClick(index)} href={"#"}>
                                    <GatsbyImage image={smalImage} alt={"sad"} />
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ProductImages;