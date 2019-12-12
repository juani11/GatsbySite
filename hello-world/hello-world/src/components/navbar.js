import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-inverse bg-inverse navbar-expand-lg sticky" id="section-works-content">
            <div className="container">
                <a className="navbar-brand" href="#pageTop" id="logoBrand">
                    <img src="images/logob.png" width="180" height="32" alt="Maria Julia Tagliero" /></a>
                <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" >
                            <a className="nav-link">Ilustraciones</a>
                        </li> <li className="nav-item active" >
                            <a className="nav-link" >Libros</a>
                        </li> <li className="nav-item active" >
                            <a className="nav-link" >Bio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
