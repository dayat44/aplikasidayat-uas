import React, { useState, useContext} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../CartContext';


const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    const {value, setValue} = useContext(CartContext)

    return (
        <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
          <NavItem>
              <NavLink to="/utama" className="nav-link"></NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/home" className="nav-link">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/transaksi" className="nav-link">Transaksi</NavLink>
            </NavItem>
          </Nav>
          
          <NavbarText>
            <Button color="gold">
              <i className="fa fa-shopping-cart"></i>
    <span className="badge badge-Light">UAS Praktikum Pemprograman Website</span>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
}

export default NavbarComp