
import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Grid } from 'semantic-ui-react';

import "./product-images.styles.css"

const ProductImages = ({ images }) => {

    const mainImage = getImage(images[0].node);

    //Saco la mainImage de images para procesar las smallImages
    const smallImagesWithoutMain = images.slice(1)

    const smallImages = smallImagesWithoutMain.map(i => ({
        src: getImage(i.node),
        alt: i.node.name
    }))

    return (
        <>
            <div className="product-current-image">
                <GatsbyImage image={mainImage} alt={"sad"} />
            </div>
            <Grid columns={2} padded>
                {smallImages.map(smallImage =>
                    <Grid.Column key={smallImage.alt}>
                        <GatsbyImage
                            image={smallImage.src}
                            alt={smallImage.alt}
                        />
                    </Grid.Column>
                )}
            </Grid>
        </>
        //Slider
        // <ProductImagesSlider images={images} />

    );
}

export default ProductImages;