/* Import React.js. */
import React from 'react'
/* Import React Bootstrap components. */
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
                    <Navbar.Brand href="/#" className="mr-auto" style={{ fontSize: "0.8rem"}}>
                        &copy; {month} {year}. Built with &nbsp;
                        <a href="https://www.gatsbyjs.com">Gatsby</a>, &nbsp;
                        <a href="https://reactjs.org/">React</a> and &nbsp;
                        <a href="https://getbootstrap.com/">Bootstrap</a>.
                    </Navbar.Brand>
                </Container>
            </Navbar >
        )
    }
}

/* EOF */
