import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/">Electronic</NavLink>
          <Nav className="me-auto" >
            <NavLink to ="/Mobile" className="text-decoration-none text-light mx-3">Mobile</NavLink>
            <NavLink to ="/Laptop" className="text-decoration-none text-light mx-3">Laptop</NavLink>
            <NavLink to="/PC" className="text-decoration-none text-light mx-3">PC</NavLink>
            <NavLink to="/Register" className="text-decoration-none text-light mx-5">Register</NavLink>
            <NavLink to="/Login" className="text-decoration-none text-light mx-5">Login</NavLink>
            {/* <Nav.Link href="#pricing">TV</Nav.Link>
            <Nav.Link href="#pricing">Other</Nav.Link> */}
          </Nav>
          <i class="fa-solid fa-cart-shopping" style = {{fontSize: 20, color: "blue"}}></i>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
