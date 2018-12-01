import React, { Component } from 'react';
// import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import '../css/App.css';

class Header extends Component {
  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header><Navbar.Brand><a href="#">PBM</a> <small>v0.0</small></Navbar.Brand><Navbar.Toggle/></Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Advertisers</NavItem>
          <NavItem eventKey={2} href="#">Zones</NavItem>
          <NavItem eventKey={3} href="#">Banners</NavItem>
          <NavItem eventKey={4} href="#">Reports</NavItem>
          <NavDropdown eventKey={5} title="Account" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      </div>
    )
  }
}

export default Header;

