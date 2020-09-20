import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Collapse,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Nav
     } 
from 'reactstrap';

import "./css/navbar-component.css";

const Navigationbar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <Navbar className = "navbar navbar-expand-lg fixed-top navbar-light">
            <NavbarToggler onClick = {toggle} />
            <NavbarBrand href = '/' className = 'navbar-brand'><img src = "images/Final.png" alt="Eternal Aroma Logo" height="50px" width="40px" /></NavbarBrand>
            <Collapse isOpen = {isOpen} navbar>
                <Nav className = "mr-auto" navbar>
                    <NavItem>
                        <NavLink><Link to = '/' className = "navitem">Home</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to = '/product' className = "navitem">Product</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to = '/aboutus' className = "navitem">About Us</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to = '/contactus' className = "navitem">Contact Us</Link></NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Navigationbar;