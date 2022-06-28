import React, { useEffect, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Button, Icon } from "semantic-ui-react";

const ProductImagesSlider = ({ images }) => {

    const [index, setIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState(images[index].node)

    const gatsbyImage = getImage(currentImage);

    const handleClick = direction => {
        if (direction === 'left')
            setIndex(index - 1)
        else
            setIndex(index + 1)

    }

    useEffect(() => {
        index !== -1 && setCurrentImage(images[index].node)
    }, [index]);

    return (
        <div style={{ position: "relative" }} >
            {(index > 0) &&
                <div className="arrow" style={{ position: "absolute", top: "50%", zIndex: "99" }} >
                    <Button color="pink" onClick={() => handleClick('left')} circular>
                        <Icon name='arrow left' />
                    </Button>
                </div>
            }
            <GatsbyImage image={gatsbyImage} alt={"sad"} />
            {(index < (images.length - 1)) &&
                <div className="arrow" style={{ position: "absolute", top: "50%", left: "95%", zIndex: "99" }}>
                    <Button color="pink" onClick={() => handleClick('right')} circular>
                        <Icon name='arrow right' color="white" />
                    </Button>
                </div>
            }
        </div>
    );
}

export default ProductImagesSlider;