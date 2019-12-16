/*import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import './clock.css'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.state.index === 7) {
            this.setState({
                index: 0
            });
        }
        else {
            this.setState({
                index: (this.state.index + 1)
            });
        }

    }


    render() {
        return (


            <StaticQuery query={graphql`
                    query{
                        allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
                            edges {
                                node {
                                    childImageSharp {
                                        fluid(maxWidth:1000){
                                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                        }
                                    }
                                }
                            }
                        }
                    }    
                    `}
                render={data => (
                    <div class="slideshow">
                        <li>
                            <span id="firstI" class="animated present">
                                <Img className="fade-in" fluid={data.allFile.edges[this.state.index].node.childImageSharp.fluid}></Img>
                            </span>
                        </li>
                    </div>
                )}
            />
        );
    }
}

export default Clock;*/

import React,{useState} from 'react';
import Img from 'gatsby-image';

import { useStaticQuery, graphql } from 'gatsby'

function SlideShow() {
    const [index, setIndex] = useState(0)
    const { allFile } = useStaticQuery(
        graphql`
        query {
            allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
                edges {
                    node {
                        childImageSharp {
                            fluid(maxWidth:1000,maxHeight:500){
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                    }
                }
            }
        }
    `
    )
    //Minus 1 for array offset from 0
    const length = allFile.edges.length - 1
    const handleNext = () =>
        index === length ? setIndex(0) : setIndex(index + 1)
    const handlePrevious = () =>
        index === 0 ? setIndex(length) : setIndex(index - 1)
    const { node } = allFile.edges[index]                                                                                                                                                            
    return (
        <div>
            <div style={{maxWidth:"50%",maxHeight:"50%"}}>
                <Img fluid={node.childImageSharp.fluid}/>
            </div>
            <div>
                <button onClick={() => handlePrevious()}>Previous</button>
                <button onClick={() => handleNext()}>Next</button>
            </div>
        </div>
    )
}

export default SlideShow