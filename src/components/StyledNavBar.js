import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./custom.css";

function StyledNavBar() {
  const Items = ({ item }) => {
    return <Nav.Link href={`#${item}`}>{item}</Nav.Link>;
  };

  const Login = () => {
    return <Nav.Link href="#login">Login</Nav.Link>;
  };

  const Cart = () => {
    return (
      <Nav.Link href="#cart">
        <FontAwesomeIcon icon={faCartShopping} />
      </Nav.Link>
    );
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="nav-brand">
            MiniMal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container className="nav-container">
              <Nav className="me-auto">
                <NavLink to="bestseller" style={{ textDecoration: "none" }}>
                  <Items item="BESTSELLER" />
                </NavLink>
                <NavLink to="all" style={{ textDecoration: "none" }}>
                  <Items item="ALL" />
                </NavLink>
                <NavLink to="blazers" style={{ textDecoration: "none" }}>
                  <Items item="BLAZERS" />
                </NavLink>
                <NavLink to="suits" style={{ textDecoration: "none" }}>
                  <Items item="SUITS" />
                </NavLink>
                <NavLink to="dress" style={{ textDecoration: "none" }}>
                  <Items item="DRESS" />
                </NavLink>
                <NavLink to="skirts" style={{ textDecoration: "none" }}>
                  <Items item="SKIRTS" />
                </NavLink>
                <NavLink to="trousers" style={{ textDecoration: "none" }}>
                  <Items item="TROUSERS" />
                </NavLink>
                <NavLink to="tops" style={{ textDecoration: "none" }}>
                  <Items item="TOPS" />
                </NavLink>
              </Nav>
            </Container>
            <Login />
            <Cart />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default StyledNavBar;
