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
          <Navbar.Brand href="/#" className="mr-auto">
            <a aria-label="mail" href={"mailto:" + cv.mail}><FontAwesomeIcon icon={faEnvelope} /></a> &nbsp;
            <a aria-label="scholar" href={cv.scholar}><FontAwesomeIcon icon={faGraduationCap} /></a> &nbsp;
            <a aria-label="github" href={cv.github}><FontAwesomeIcon icon={faGithub} /></a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar">
            <FontAwesomeIcon icon={faBars} className="text-info" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar">
            <Nav className="ml-auto">
              <Nav.Link> <Link to="/">About</Link>                      </Nav.Link>
              <Nav.Link> <Link to="/cv">CV</Link>                      </Nav.Link>
              <Nav.Link> <Link to="/publications">Publications</Link>   </Nav.Link>
              <Nav.Link> <Link to="/talks">Talks</Link>                 </Nav.Link>
              <Nav.Link> <Link to="/projects">Projects</Link>            </Nav.Link>
              <Nav.Link> <Link to="/teaching">Teaching</Link>           </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    )
  }
}

/* EOF */
