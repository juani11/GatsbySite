import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { Link } from "gatsby"

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="white" light expand="md" sticky="top" id="section-works-content">
            <Container>
                <NavbarBrand href="/"><img src="layoutImgs/logob.png" width="180" height="32" alt="Maria Julia Tagliero" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/" state={{ scrollTop: true }} onClick={toggle}>
                                <a className="nav-link" href="">ILUSTRACIÓN</a>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">LIBROS</NavLink>
                        </NavItem>
                        <NavItem>
                            <Link to="/bio" onClick={toggle} >
                                <a className="nav-link" href="">BIO</a>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}
const NavigationDetail = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (

        <Navbar color="white" light sticky="top" >

            <Nav style={{ margin: "0 auto" }}>
                <NavItem>
                    <Link to="/" state={{ scrollTop: true }} >
                        <a className="nav-link" href="">ILUSTRACIÓN</a>
                    </Link>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">LIBROS</NavLink>
                </NavItem>
                <NavItem>
                    <Link to="/bio" >
                        <a className="nav-link" href="">BIO</a>
                    </Link>
                </NavItem>
            </Nav>

        </Navbar>

    );
}

export { Navigation, NavigationDetail }