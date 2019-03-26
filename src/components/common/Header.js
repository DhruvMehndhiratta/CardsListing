import React from 'react'
import {
  Col,
  ControlLabel,
  Button,
  Row,
  Grid,
  FormControl,
  Navbar,
  NavDropdown,
  NavItem,
  Nav,
  MenuItem,
  Dropdown
} from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <div>
            <h1>eazy</h1><h2>.my</h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            <Nav.Link href="/detail">Categories</Nav.Link>
            <Nav.Link href="#link">Notification</Nav.Link> 
            <Nav.Link href="#link">Login/Signup</Nav.Link> 
            <Nav.Link href="#link">Help</Nav.Link> 

           
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header