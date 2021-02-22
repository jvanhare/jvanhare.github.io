/* Import React.js. */
import React from "react"
/* Import React Bootstrap components. */
import Container from 'react-bootstrap/Container'
/* Import my components. */
import Layout from "../components/layout/layout"

const NotFound = () => {
    return (
        <Layout>
            <Container fluid>
                <h1>Sorry! But the requested page does not exist!</h1>
            </Container>
        </Layout>
    )
}

export default NotFound