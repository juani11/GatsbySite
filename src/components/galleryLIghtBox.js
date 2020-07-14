import React, { useState } from 'react';

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const GalleryLightBox = (props) => {
  const { isOpen, setIsOpen, photos } = props;


  const [photoIndex, setPhotoIndex] = useState(1);

  return (
    isOpen ?
      <Lightbox
        images={photos}
        animationDuration={700}
        imageCaption={<p style={{ fontFamily: "Raleway,sans-serif", fontSize: 20 }}>NOMBRE ILUSTRACION PIOLA</p>}/*{photos[photoIndex].node.childImageSharp.fluid.originalName}*/
        mainSrc={photos[photoIndex].node.childImageSharp.fluid.src}
        nextSrc={photos[(photoIndex + 1) % photos.length]}
        prevSrc={photos[(photoIndex + photos.length - 1) % photos.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % photos.length)
        }
      /> : null
  )
}
export default GalleryLightBox;