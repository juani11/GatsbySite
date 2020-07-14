import React from 'react';
import instImg from '../images/layoutImgs/inst.png';
import linkImg from '../images/layoutImgs/link.png';
import contactImg from '../images/layoutImgs/contact.png';
const Footer = () => {
    return (
        <footer className="footer">
            <div style={{ textAlign: "center" }}>
                <a href="https://www.instagram.com/mariajuliatagliero/" target="_blank" rel="noopener noreferrer"><img src={instImg}
                    width="45" height="45" alt="instagram" /></a>
                <a href="https://www.linkedin.com/in/maria-julia-tagliero-9a673535/" target="_blank" rel="noopener noreferrer"><img
                    src={linkImg} width="50" height="50" alt="linkedin" /></a>
                <div style={{ marginTop: "25px" }}>
                    <img src={contactImg} width="200" height="65" alt="contactme" />
                    <p style={{ fontsize: "16px" }}>contacto@mariajuliatagliero.com</p>
                </div>
                <p style={{ color: "#999" }}> &copy; 2020 MARIA JULIA TAGLIERO </p>
            </div>
        </footer>
    );
}

export default Footer;