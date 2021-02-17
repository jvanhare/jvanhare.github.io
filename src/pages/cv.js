/* Import React.js. */
import React from "react"
/* Import my components. */
import Layout from "../components/layout/layout"
import Experience from "../components/cv/experience"
import Education from "../components/cv/education"
/* Import my CSS. */
import "../scss/main.scss";
/* Import my yaml data. */
import cv from "/static/cv/src/cv.yml"

export default class CV extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Curriculum Vitae</h1>
        <h2>Professional experience</h2>
        {cv.experience.map((exp, index) => {
          return <Experience data={exp}></Experience>
        })}
        <h2>Education</h2>
        {cv.education.map((edu, index) => {
          return <Education data={edu}></Education>
        })}
      </Layout>
    )
  }
}

/* EOF */
