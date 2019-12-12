import React from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image"

const IlustrationsGrid = (props) => {
    return (
        <div className="container">
            {props.data.map(column => {
                return (
                    <div className="column">
                        {column.map(image => {
                            const imgName= (image.fluid.originalName).split(".")[0]
                            const imgLink = '/' + imgName
                            return (
                                <div className="img-wrapper" key={image.id} >
                                    <Link to={imgLink}>
                                        <Img fluid={image.fluid} backgroundColor={"rgb(0, 0, 0,0.7)"} durationFadeIn={1200} alt={imgName}  />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default IlustrationsGrid;