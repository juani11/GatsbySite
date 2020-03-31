import React from "react"
import SlideShow from "./slideshow";
import { Navigation, NavigationDetail } from "./navbar";
import Footer from "./footer";

import "./layout.css"
import '../styles/bootstrap.min.css'
//import '../styles/bootstrap-grid.min.css'

export default ({ children, location }) => {
    return (
        <div>
            {
                ((location.pathname === '/') || (location.pathname === '/bio')) && <SlideShow />
            }
            <Navigation />
            {children}
            <Footer />
        </div>
    )
}

