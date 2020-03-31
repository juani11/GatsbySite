
import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./slideshow.css"
/*
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if ((this.state.index + 1) > 9) {
            this.setState({
                index: 0
            });
        }
        else {
            this.setState({
                index: this.state.index + 1
            });
        }
    }



    render() {

        const { allFile } = useStaticQuery(graphql`
		query {
			allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"} relativeDirectory: {eq:"io/ioSlide"}}) {
				edges {
					node {
						base
						childImageSharp {
							fluid(maxWidth: 1800) {
								...GatsbyImageSharpFluid_withWebp_tracedSVG
								originalName
							}
							id
						}
					}
				}
			}
		}
    `)

        const length = allFile.edges.length - 1

        return (
            <div>
                <div id="slideshow1" className="col-md-6" >
                    <Img
                        fluid={allFile.edges[this.state.index].node.childImageSharp.fluid}

                        alt={allFile.edges[this.state.index].node.childImageSharp.fluid.originalName}
                    />
                </div>
            </div>
            
        );
    }
}
export default Clock;*/


const SlideShow = () => {

    const [index, setIndex] = useState(0)

    const { allFile } = useStaticQuery(graphql`
		query {
			allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"} relativeDirectory: {eq:"io/ioSlide"}}) {
				edges {
					node {
						base
						childImageSharp {
							fluid(maxWidth: 1800) {
								...GatsbyImageSharpFluid_withWebp_noBase64
								originalName
							}
							id
						}
					}
				}
			}
		}
    `)

    //const length = allFile.edges.length - 1
    /*
const changeImg = () => {
    (index === 8) ? setIndex(0) : setIndex(index + 1);
}

useEffect(() => {
    const interval = setInterval(changeImg, 5000);

    return () => {
        clearInterval(interval);
    };

}, [index]);*/
    return (
        <div id="slideshow">
            <li>
                <Img fluid={allFile.edges[0].node.childImageSharp.fluid}
                    alt={allFile.edges[0].node.childImageSharp.fluid.originalName} />
            </li>
            <li>
                <Img fluid={allFile.edges[1].node.childImageSharp.fluid}
                    alt={allFile.edges[1].node.childImageSharp.fluid.originalName} />
            </li>
            <li>
                <Img fluid={allFile.edges[2].node.childImageSharp.fluid}
                    alt={allFile.edges[2].node.childImageSharp.fluid.originalName} />
            </li>
            <li>
                <Img fluid={allFile.edges[3].node.childImageSharp.fluid}
                    alt={allFile.edges[3].node.childImageSharp.fluid.originalName} />
            </li>
            <li>
                <Img fluid={allFile.edges[4].node.childImageSharp.fluid}
                    alt={allFile.edges[4].node.childImageSharp.fluid.originalName} />
            </li>
            <li>
                <Img fluid={allFile.edges[5].node.childImageSharp.fluid}
                    alt={allFile.edges[5].node.childImageSharp.fluid.originalName} />
            </li>
            <li>
                <Img fluid={allFile.edges[6].node.childImageSharp.fluid}
                    alt={allFile.edges[6].node.childImageSharp.fluid.originalName} />
            </li>

        </div>
    );
}



export default SlideShow
