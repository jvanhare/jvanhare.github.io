/* Import React.js. */
import React from 'react'
/* Import React Bootstrap components. */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
/* Import Gatbsy components. */
import { Link } from "gatsby"
/* Import Font Awesome icons. */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* Import my yaml data. */
import cv from "/static/cv/src/cv.yml"

export default class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="sm" fixed="top">
        <Container>
          <Navbar.Brand className="mr-auto">
            <Nav.Link href={"mailto:" + cv.mail}><FontAwesomeIcon icon={faEnvelope} /></Nav.Link>&nbsp;&nbsp;
            <Nav.Link href={cv.scholar}><FontAwesomeIcon icon={faGraduationCap} /></Nav.Link>&nbsp;&nbsp;
            <Nav.Link href={cv.github}><FontAwesomeIcon icon={faGithub} /></Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar">
            <FontAwesomeIcon icon={faBars} className="text-info" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">About</Nav.Link>
              <Nav.Link as={Link} to="/cv">CV</Nav.Link>
              <Nav.Link as={Link} to="/publications">Publications</Nav.Link>
              <Nav.Link as={Link} to="/talks">Talks</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/teaching">Teaching</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    )
  }
}

/* EOF */
