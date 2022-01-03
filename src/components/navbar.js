import React, { useState, useContext } from 'react';
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
import { CartContext } from '../context/cart/cart.context';
import { useWindowSize } from '../hooks/windowsSize';
import { navigationData } from '../utils/constants';


const NavigationItem = ({ name, pathname, scrollTop = false, onClick }) =>
    <NavItem active>
        <Link to={pathname} state={{ scrollTop }} onClick={onClick}>
            <a className="nav-link" href="#">{name}</a>
        </Link>
    </NavItem>



const Navigation = ({ sticky = false }) => {

    const [isOpen, setIsOpen] = useState(false);

    const { size } = useWindowSize();

    const toggle = () => (size[0] <= 768) && setIsOpen(!isOpen);

    const { cantProducts, purchaseOrderCreated } = useContext(CartContext)

    const propSticky = sticky ? "top" : ""
    return (
        <Navbar color="white" light expand="md" sticky={propSticky} id="section-works-content">
            <Container>
                <NavbarBrand href="/"><img src={logo} width="180" height="32" alt="Maria Julia Tagliero" /></NavbarBrand>

                {/* SI SE ESTA MOSRANDO UNA ORDEN DE PAGO, NO MOSTRAR LOS ITEMS DEL NAVBAR */}
                {!purchaseOrderCreated &&
                    <>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {navigationData.map((navItemData) => <NavigationItem {...navItemData} onClick={toggle} />)}
                                <NavigationItem
                                    name={`Carrito (${cantProducts()})`}
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