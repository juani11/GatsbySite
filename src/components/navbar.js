import React, { useState } from 'react';
import { Link } from "gatsby"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';

import logo from '../images/layoutImgs/logob.png'
import { useWindowSize } from '../hooks/windowsSize';
import { navigationData } from '../utils/constants';
import { useCartContext } from '../hooks/useCartContext';


const NavigationItem = ({ name, pathname, scrollTop = false, onClick }) =>
    <NavItem active>
        <Link to={pathname} state={{ scrollTop }} onClick={onClick}>
            <a className="nav-link" href="#">{name}</a>
        </Link>
    </NavItem>



const Navigation = ({ sticky, currentPath }) => {

    const [isOpen, setIsOpen] = useState(false);

    const { size } = useWindowSize();

    const toggle = () => (size[0] <= 768) && setIsOpen(!isOpen);

    const context = useCartContext()

    const propSticky = sticky ? "top" : ""
    return (
        <Navbar color="white" light expand="md" sticky={propSticky} id="section-works-content">
            <Container>
                <NavbarBrand href="/"><img src={logo} width="180" height="32" alt="Maria Julia Tagliero" /></NavbarBrand>

                {/* SI ESTA EN CHECKOUT, NO MOSTRAR LOS ITEMS DEL NAVBAR */}
                {currentPath != '/checkout' &&
                    <>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {navigationData.map((navItemData) => <NavigationItem {...navItemData} onClick={toggle} key={navItemData.id} />)}
                                <NavigationItem
                                    name={`Carrito (${context.cantProducts()})`}
                                    pathname={"/cart"}
                                    onClick={toggle}
                                />
                            </Nav>
                        </Collapse>
                    </>
                }
            </Container>
        </Navbar>
    );
}

export { Navigation }