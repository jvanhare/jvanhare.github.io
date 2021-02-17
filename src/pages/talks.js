/* Import React.js. */
import React from "react"
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
                <h1>Talks</h1>
                <h2>Conferences</h2>
                <h2>Seminars</h2>
                <ol>
                    {cv.seminars.map((sem, index) => {
                        return <Seminar data={sem}></Seminar>
                    })}
                </ol>
            </Layout>
        )
    }
}

/* EOF */
