import React from "react"
import "./layout.css"
import Navbar from "./navbar"
import Footer from "./footer";

export default ({ children }) => (
    <div>
        {/*<Navbar />*/}
        {children}
        <Footer />
    </div>
)

