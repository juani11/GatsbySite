import React from "react"
import "./layout.css"
import Navbar from "./navbar"
import Footer from "./footer";
import '../styles/bootstrap.min.css'
import '../styles/bootstrap-grid.min.css'
import SlideShow from "./slideshow";
import { Helmet } from "react-helmet";

export default ({ children, location }) => {
    if ((location.pathname === '/') || (location.pathname === '/bio')) {
        return (
            <div>
                <Helmet>
                    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
                </Helmet>
                <SlideShow />
                <Navbar />
                {children}
                <Footer />
            </div>
        )
    }
    else {
        return (
            <div>
                <Helmet>
                    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
                </Helmet>
                {children}
                <Footer />

            </div>
        )
    }


}

