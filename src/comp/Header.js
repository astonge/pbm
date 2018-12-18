import Routes from "../Routes";
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import '../css/App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  renderAccountMenu() {
    if(this.state.loggedIn === true)
      return(<MenuItem eventKey={3.1} href="/logout/">Logout</MenuItem>);
    else
      return(<MenuItem eventKey={3.1} href="/login/">Login</MenuItem>);
  }

  render() {
    return (
      <div>
      <Navbar fluid collapseOnSelect inverse>
        <Navbar.Header><Navbar.Brand><Link to="/">PBM</Link> </Navbar.Brand><Navbar.Toggle/></Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem><Link to="/newzone">New Zone</Link></NavItem>
          </Nav>
          <Nav>
            <NavItem><Link to="/newadvertiser">New Advertiser</Link></NavItem>
          </Nav>
          <Nav>
            <NavItem><Link to="/newad">New Ad</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes/>
      </div>
    )
  }
}

export default Header;

