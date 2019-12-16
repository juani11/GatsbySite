
import React from 'react';

const Footer = () => {
    return (  
        <footer>
            <div>
                <div>
                    <div style={{ textAlign: "center" }}>
                        <a href="https://www.instagram.com/mariajuliatagliero/" target="_blank" rel="noopener noreferrer"><img src="layoutImgs/inst.png"
                            width="50" height="50" alt="instagram"/></a>
                        <a href="https://www.linkedin.com/in/maria-julia-tagliero-9a673535/" target="_blank" rel="noopener noreferrer"><img
                            src="layoutImgs/link.png" width="50" height="50" alt="linkedin"/></a>
                        <div style={{ marginTop: "25px" }}>
                            <img src="footerImgs/contact.png" width="200" height="65" alt="contactme"/>
                            <p style={{ fontsize: "17px" }}>contacto@mariajuliatagliero.com</p>
                        </div>
                        <p style={{ color: "#999" }}> &copy; 2019 Maria Julia Tagliero </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;