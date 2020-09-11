import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
// import Icon from "../NavIcon";
import "./styles.css"



function Navbar2(){
    return (
        <Navbar expand="lg" className="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          
              <NavDropdown.Item href="/newtrip" className="navButton">NEW TRIP</NavDropdown.Item>
              <NavDropdown.Item href="/agenda" className="navButton">AGENDA</NavDropdown.Item>
              <NavDropdown.Item href="/logout" className="navButton">LOG OUT</NavDropdown.Item>
        
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navbar2;