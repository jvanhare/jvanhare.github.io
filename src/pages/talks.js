/* Import React.js. */
import React from "react"
/* Import React Bootstrap components. */
import Container from 'react-bootstrap/Container'
/* Import my components. */
import Layout from "../components/layout/layout"
import Seminar from "../components/talks/seminar"
/* Import my CSS. */
import "../scss/main.scss";
/* Import my yaml data. */
import cv from "/static/cv/src/cv.yml"

export default class Projects extends React.Component {
    render() {
        return (
            <Layout>
                <Container fluid>
                    <h1>Talks</h1>
                    <h2>Conferences</h2>
                    <h2>Seminars</h2>
                    <ol>
                        {cv.seminars.map((sem, index) => {
                            return <Seminar key={`seminar_${index}`} data={sem}></Seminar>
                        })}
                    </ol>
                </Container>
            </Layout>
        )
    }
}

/* EOF */
