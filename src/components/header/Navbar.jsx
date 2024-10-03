import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css"

const NavBar = () => {
  return (
    <Navbar className="navbar" bg="light" variant="light" expand="lg">
      <Container className="content">
        <Navbar.Brand href="#home" >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/024/320/053/small/blood-donation-icon-png.png"
            alt="Logo de Doação de Sangue"
            style={{ height: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#services" >
              Sobre nós
            </Nav.Link>
            <Nav.Link href="#form" >
              Doe Sangue
            </Nav.Link>
            <Nav.Link href="#about" >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
