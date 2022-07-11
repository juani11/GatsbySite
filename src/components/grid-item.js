import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ReactWOW from 'react-wow'

const delay_arr = ["0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];

const GridItem = ({ image, detail }) => {

    const gatsbyImage = getImage(image)
    const imgName = image.name
    const imgLink = '/' + imgName.replace(/\s/g, '-')
    const randomDelay = delay_arr[Math.floor(Math.random() * delay_arr.length)]

    return (
        <ReactWOW animation='fadeIn' delay={randomDelay} duration="0.5s">
            <div className="grid-img-wrapper" >
                {detail ?
                    <Link to={imgLink}>
                        <GatsbyImage image={gatsbyImage} alt={imgName} />
                    </Link>
                    : <GatsbyImage image={gatsbyImage} alt={imgName} />
                }
            </div>
        </ReactWOW>
    )
}

export default GridItem
