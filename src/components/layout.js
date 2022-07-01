import React from "react"
import SlideShow from "./slideshow";
import { Navigation } from "./navbar";
import Footer from "./footer";

import "./layout.css"
import '../styles/bootstrap.min.css'
import { navigationData } from "../utils/constants";
export default ({ children, location }) => {

    const { pathname } = location

    return (
        <div>
            {
                (pathname === '/') && <SlideShow />
            }
            {
                ((pathname === '/') || (pathname === '/bio') || (pathname === '/books')) ?
                    <Navigation sticky currentPath={pathname} />
                    :
                    <Navigation currentPath={pathname} />
            }

            {children}
            <Footer />
        </div>
    )
}

