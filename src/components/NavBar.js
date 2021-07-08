import React from "react";
import '../App.css'
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar  bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Tweet-Fier</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link id="nav1" href="/">Home</Nav.Link>
              <Nav.Link id="nav1" href="/tweets-random">Random</Nav.Link>
              <Nav.Link id="nav1" href="/about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default NavBar;
