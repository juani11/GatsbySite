
import React, { useState } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./product-images.styles.css"
import { Grid } from 'semantic-ui-react';
import ProductImagesSlider from '../product-images-slider/product-images-slider.component';

const ProductImages = ({ images }) => {

    const [indexCurrentImage, setIndexCurrentImage] = useState(0);

    const currentImage = getImage(images[indexCurrentImage].node);

    const handleClick = index => setIndexCurrentImage(index)
    const smalImage = getImage(images[1].node);
    const smalImage2 = getImage(images[2].node);
    const smalImage3 = getImage(images[3].node);
    const smalImage4 = getImage(images[4].node);
    return (
        // <div>
        //     <div className="product-current-image">
        //         <GatsbyImage image={currentImage} alt={"sad"} />
        //     </div>
        //     <div className="product-small-images">
        //         <ul style={{ padding: "0px" }}>
        //             {images.map((_, index) => {
        //                 const smalImage = getImage(images[index].node);
        //                 return (
        //                     <li className={`product-small-image ${index === indexCurrentImage && "selected-image"}`} >
        //                         <a onClick={() => handleClick(index)} href={"#"}>
        //                             <GatsbyImage image={smalImage} alt={"sad"} />
        //                         </a>
        //                     </li>
        //                 )
        //             })}
        //         </ul>
        //     </div>
        // </div>

        <div>
            <div className="product-current-image">
                <GatsbyImage image={currentImage} alt={"sad"} />
            </div>
            <Grid columns={2} padded>
                <Grid.Row>
                    <Grid.Column>
                        <GatsbyImage image={smalImage} alt={"sad"} />
                    </Grid.Column>
                    <Grid.Column>
                        <GatsbyImage image={smalImage2} alt={"sad"} />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <GatsbyImage image={smalImage3} alt={"sad"} />
                    </Grid.Column>
                    <Grid.Column>
                        <GatsbyImage image={smalImage4} alt={"sad"} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>


        //Slider
        // <ProductImagesSlider images={images} />

    );
}

export default ProductImages;