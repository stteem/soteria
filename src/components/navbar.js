import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, Button, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//import logo from '../assets/logo.png';


class NavBar extends Component {
    
    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto logo" href="/">Soteria</NavbarBrand>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/'>
                                        <Button style={{borderRadius:'20px',background:'transparent',opacity: 0.8}} className="butn"> 
                                            Admin
                                        </Button>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;