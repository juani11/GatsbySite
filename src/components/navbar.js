import React, { useState, useContext } from 'react';
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
import { useWindowSize } from '../hooks/windowsSize';
import logo from '../images/layoutImgs/logob.png'
import { CartContext } from '../context/cart/cart.context';


const Navigation = (props) => {
    const { sticky = false } = props;
    const [isOpen, setIsOpen] = useState(false);

    const { size } = useWindowSize();

    const toggle = () => (size[0] <= 768) && setIsOpen(!isOpen);

    const { cart, cantProducts, subTotal } = useContext(CartContext)

    const propSticky = sticky ? "top" : ""
    return (
        <Navbar color="white" light expand="md" sticky={propSticky} id="section-works-content">
            <Container>
                <NavbarBrand href="/"><img src={logo} width="180" height="32" alt="Maria Julia Tagliero" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem active>
                            <Link to="/" state={{ scrollTop: true }} onClick={toggle}>
                                <a className="nav-link" href="#">Ilustración</a>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/books" state={{ scrollTop: true }} onClick={toggle}>
                                <a className="nav-link" href="#">Libros</a>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/bio" onClick={toggle} >
                                <a className="nav-link" href="#">Bio</a>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/shop" onClick={toggle} >
                                <a className="nav-link" href="#">Shop</a>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/cart" onClick={toggle} >
                                <a className="nav-link" href="#">Carrito({cantProducts()})</a>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}
const NavigationDetail = () => {
    //const [collapsed, setCollapsed] = useState(false);
    //const toggleNavbar = () => setCollapsed(!collapsed);

    return (

        <Navbar color="white" light sticky="top" >

            <Nav style={{ margin: "0 auto" }}>
                <NavItem>
                    <Link to="/" state={{ scrollTop: true }} >
                        <a className="nav-link" href="#">ILUSTRACIÓN</a>
                    </Link>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">LIBROS</NavLink>
                </NavItem>
                <NavItem>
                    <Link to="/bio" >
                        <a className="nav-link" href="#">BIO</a>
                    </Link>
                </NavItem>
            </Nav>

        </Navbar>

    );
}

export { Navigation, NavigationDetail }