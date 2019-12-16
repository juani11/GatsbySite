import React from "react"
import "./layout.css"
import SlideShow from "../components/clock";
import Navbar from "./navbar"
import Footer from "./footer";

export default ({ children }) => (
    <div>
        <SlideShow/>
        <Navbar/>
        {children}
        <Footer/>
    </div>
)
