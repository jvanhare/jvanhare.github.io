/* Import React.js. */
import React from "react"
/* Import React Bootstrap components. */
import Container from 'react-bootstrap/Container'
/* Import my components. */
import Layout from "../components/layout/layout"
import Course from "../components/cv/course"
/* Import my CSS. */
import "../scss/main.scss";
/* Import my yaml data. */
import cv from "/static/cv/src/cv.yml"

export default class Teaching extends React.Component {
  render() {
    return (
      <Layout>
        <Container fluid>
          <h1>Teaching</h1>
          {cv.teaching.map((course, index) => {
            return <Course key={`course_${index}`} data={course}></Course>
          })}
        </Container>
      </Layout>
    )
  }
}

/* EOF */
