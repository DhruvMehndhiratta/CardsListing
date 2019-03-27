import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="/">
        <div>
          <h1>eazy</h1>
          <h2>.my</h2>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Categories</Nav.Link>
          <Nav.Link>Notification</Nav.Link>
          <Nav.Link>Login/Signup</Nav.Link>
          <Nav.Link>Help</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;