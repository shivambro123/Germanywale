import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./../../../assests/logo.svg";
import "./../../../styles/Navbarcompcss.css";
function Navbarcomp() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbarwrapper sticky top-0 w-100 z-50"
    >
      <Container>
        <Navbar.Brand data-to-scrollspy-id="first">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className="mx-4 font-bold text-black text-lg"
              data-to-scrollspy-id="first"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="mx-4 font-bold text-black text-lg"
              data-to-scrollspy-id="second"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="mx-4 font-bold text-black text-lg"
              href="#link"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="mx-4 font-bold text-black text-lg"
              href="#link"
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              className="mx-4 font-bold text-black text-lg"
              href="#link"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp;
