import React from "react"
import SlideShow from "./slideshow";
import { Navigation } from "./navbar";
import Footer from "./footer";

import "./layout.css"
import '../styles/bootstrap.min.css'
import { navigationData } from "../utils/constants";
export default ({ children, location }) => {
    return (
        <div>
            {
                (location.pathname === '/') && <SlideShow />
            }
            {
                ((location.pathname === '/') || (location.pathname === '/bio') || (location.pathname === '/books')) ? <Navigation sticky={true} /> : <Navigation />
            }

            {children}
            <Footer />
        </div>
    )
}

