import React, { useState, useEffect } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
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
import { doLogout, getCurrentUser, isLoggedIn } from "../auth";

function CustomNavbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [login, setlogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setlogin(isLoggedIn());
    setUser(getCurrentUser());
  }, [login]);

  const logout = () => {
    doLogout(() => {
      // loggeg out
      setlogin(false);
      // navigate("/");
    });
  };
  return (
    <Navbar className="px-5 py-4" color="dark" dark expand="md" fixed="">
      <NavbarBrand tag={ReactLink} to="/">
        Blog App
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        {/* me-auto => left me all navitem */}
        <Nav className="me-auto h3" navbar>
          <NavItem>
            <NavLink tag={ReactLink} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/services">
              Services
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              More
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag={ReactLink} to="/services">
                Contact Us
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Linkdln</DropdownItem>
              <DropdownItem>Github</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Nav className="h3" navbar>
          {login && (
            <>
              <NavItem>
                <NavLink tag={ReactLink} to="/user/profile">
                  Profile
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={ReactLink} to="/user/dashboard">{user.email}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={logout} tag={ReactLink} to="/">
                  Logout
                </NavLink>
              </NavItem>
            </>
          )}

          {!login && (
            <>
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
            </>
          )}
        </Nav>
        {/* <NavbarText>Welcome to Blog App</NavbarText> */}
      </Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
