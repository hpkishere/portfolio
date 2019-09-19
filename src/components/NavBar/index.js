import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import navbarStyles from "./navbar.module.css"
import { Link } from "gatsby"

export default (props) =>
  <React.Fragment>
    <Navbar bg="light" expand="lg" id={navbarStyles.rootNavbar}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to={'/skills'} style={{ textDecoration: 'none' }}>
            <Nav.Link className={navbarStyles.navLinks} href="skills">skills</Nav.Link>
          </Link>
          <Nav.Link className={navbarStyles.navLinks} href="files/resume.pdf" target={'_blank'}>resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </React.Fragment>
