import React from "react"
import "./layout.css"

import Navbar from "./navbar"
import Footer from "./footer";
import SlideShowBG from "./slideshowbg";


export default ({ children }) => (

    <div>
        <SlideShowBG/>
        <Navbar />
        {children}
        <Footer />
    </div>
)
