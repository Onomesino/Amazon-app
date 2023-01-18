import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="data:image/png;base64,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"
              alt=""
              style={{width: "4rem"}}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
