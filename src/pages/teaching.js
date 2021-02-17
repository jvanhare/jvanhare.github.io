/* Import React.js. */
import React from "react"
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
        <h1>Teaching</h1>
        {cv.teaching.map((course, index) => {
          return <Course data={course}></Course>
        })}
      </Layout>
    )
  }
}

/* EOF */
