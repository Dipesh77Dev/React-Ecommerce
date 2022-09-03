import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href ="#home">Shop</Navbar.Brand> */}
          <NavLink to ="/">Shop</NavLink>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <NavLink to ="/products">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header;