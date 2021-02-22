/* Import React.js. */
import React from "react"
/* Import React Bootstrap components. */
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
/* Import my components. */
import Layout from "../components/layout/layout"
/* Import my CSS. */
import "../scss/main.scss";
/* Import my yaml data. */
import cv from "/static/cv/src/cv.yml"

export default class About extends React.Component {
  render() {
    var date = new Date(cv.position_date_start).toLocaleDateString("en-US",
      { year: 'numeric', month: 'long' });
    return (
      <Layout>
        <Row>
          <Col sm={12} md={4} align="center">
            <img src={'/fig/photo_square.jpg'} style={{ borderRadius: "50%", width: 250, height: 250, margin: "10px" }} className="center" alt="" /> <br />
            {cv.name}<br />
            {cv.position}<br />
            <a href={cv.company.website}>{cv.company.name} - {cv.company.team}</a><br />
            <a href={cv.company.website}>{cv.company.name_alt}</a>
          </Col>
          <Col sm={12} md={8} align="left">
            <h1>About</h1>
            <p>
              Since {date}, I am a research engineer in the&nbsp;
                {cv.company.team} team at&nbsp;
                <a href={cv.company.website}>{cv.company.name}</a>,&nbsp;
                <a href={cv.company.website}>{cv.company.name_alt}</a>.
                This team is composed of the main developpers of the&nbsp;
                <a href="https://cedre.onera.fr/">CEDRE</a> suite.
              </p>
            <p>
              My reasearch interests lie in numerical methods and tools for
              Computational Fluid Dynamics (CFD).
              I am working on high-order and high-fidelity numerical methods
              and high-order anisotropic mesh adaptation to perform
              Large Eddy Simulation around complex geometries.
               </p>
            <h2>Research interests</h2>
            <ul>
              {cv.research_interests.map((key, index) => {
                return <li key={`key_item_${index}`}>{key.keyword}</li>
              })}
            </ul>
          </Col>
        </Row>
      </Layout>
    )
  }

  // </Navbar>

  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={maxWidth: `300px`, marginBottom: `1.45rem` }>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>

  //   <p>
  //   <Button type="button" class="close" data-dismiss="alert" aria-label="Close">
  //     <span aria-hidden="true">&times;</span>
  //   </Button>
  //   </p>

  //   <Alert dismissible variant="danger">
  //     <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
  //     <p>
  //       Change this and that and try again.
  //     </p>
  //   </Alert>

  // </Layout>
}

/* EOF */
