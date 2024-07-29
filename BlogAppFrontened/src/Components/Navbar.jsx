import React, { useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function CustomNavbar() {
    const[isOpen,setIsOpen] = useState(false)
 return (
    
    <Navbar
    
    color="dark"
    dark
    expand="md"
    fixed="">
      <NavbarBrand tag={ReactLink} to="/">Blog App</NavbarBrand>
      <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={ReactLink} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/signup">
              SignUp
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              More
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag={ReactLink} to="/services">Services</DropdownItem>
              <DropdownItem>ContactUs</DropdownItem>
              
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Welcome to Blog App</NavbarText>
      </Collapse>
    </Navbar>
  
  );
}

export default CustomNavbar;
