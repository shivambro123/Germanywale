import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./../../../assests/logo.svg";
import "./../../../styles/Navbarcompcss.css";
function Navbarcomp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbarwrapper">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-4 font-bold text-black" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="mx-4 font-bold text-black" href="#link">
              About Us
            </Nav.Link>
            <Nav.Link className="mx-4 font-bold text-black" href="#link">
              Services
            </Nav.Link>
            <Nav.Link className="mx-4 font-bold text-black" href="#link">
              Reviews
            </Nav.Link>
            <Nav.Link className="mx-4 font-bold text-black" href="#link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp;
