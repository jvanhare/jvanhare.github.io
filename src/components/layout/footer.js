/* Import React.js. */
import React from 'react'
/* Import React Bootstrap components. */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
/* Date for the footer. */
const date = new Date();
const year = date.getFullYear();
const month = date.toLocaleString('en-us', { month: 'short' });

export default class Footer extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="sm" fixed="bottom">
                <Container>
                    <Navbar.Brand className="mr-auto" style={{ fontSize: "0.8rem"}}>
                        &copy; {month} {year}. Built with <Nav.Link href="https://www.gatsbyjs.com">Gatsby</Nav.Link>,&nbsp;
                        <Nav.Link href="https://reactjs.org/">React</Nav.Link> and&nbsp;
                        <Nav.Link href="https://getbootstrap.com/">Bootstrap</Nav.Link>.
                    </Navbar.Brand>
                </Container>
            </Navbar >
        )
    }
}

/* EOF */
