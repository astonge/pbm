import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { LinkContainer } from 'react-router-bootstrap';

import '../css/App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  renderAccountMenu() {
    if(this.state.loggedIn == true)
      return(<MenuItem eventKey={3.1} href="/logout/">Logout</MenuItem>);
    else
      return(<MenuItem eventKey={3.1} href="/login/">Login</MenuItem>);
  }

  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header><Navbar.Brand><a href="/">PBM</a> <small>v0.0</small></Navbar.Brand><Navbar.Toggle/></Navbar.Header>
        <Nav>
          <LinkContainer to="/NewZone">
            <NavItem eventKey={1}>Advertisers</NavItem>
          </LinkContainer>
          {/* <NavItem eventKey={2} to="new-zone/">Zones</NavItem>
          <NavItem eventKey={3} href="view-banners/">Banners</NavItem>
          <NavItem eventKey={4} href="view-reports/">Reports</NavItem> */}
          <NavDropdown eventKey={5} title="Account" id="basic-nav-dropdown">
            {
              this.renderAccountMenu()
            }
          </NavDropdown>
        </Nav>
      </Navbar>
      </div>
    )
  }
}

export default Header;

