/* Import React.js. */
import React from "react"
/* Import React Bootstrap components. */
import Container from 'react-bootstrap/Container'
/* Import my components. */
import Layout from "../components/layout/layout"
import Experience from "../components/cv/experience"
import Education from "../components/cv/education"
/* Import my CSS. */
import "../scss/main.scss";
/* Import Font Awesome icons. */
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* Import my yaml data. */
import cv from "/static/cv/src/cv.yml"
import cv_pdf from "/static/pdf/cv.pdf"

export default class CV extends React.Component {
  render() {
    return (
      <Layout>
        <Container fluid>
          <a href={cv_pdf}><h1>Curriculum Vitae <FontAwesomeIcon icon={faDownload} /></h1></a>
          <h2>Professional experience</h2>

          {cv.experience.map((exp, index) => {
            return <Experience key={`exp_${index}`} data={exp} />
          })}
          <br />
          <h2>Education</h2>
          {cv.education.map((edu, index) => {
            return <Education key={`edu_${index}`} data={edu}></Education>
          })}
        </Container>
      </Layout>
    )
  }
}

/* EOF */
