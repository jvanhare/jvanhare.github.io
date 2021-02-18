/* Import React.js. */
import React from "react"
/* Import React Bootstrap components. */
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Carousel from "react-bootstrap/Carousel"
/* Import my components. */
import Layout from "../components/layout/layout"

const Seminar = props => {
    const { pageContext } = props
    const { title, html, pdf, img, institution, institution_url, location, date, abstract } = pageContext
    var opt = { day: 'numeric', year: 'numeric', month: 'long' };
    var formatDate = new Date(date).toLocaleDateString("en-US", opt);
    console.log(img, pdf)
    return (
        <Layout>
            <Container fluid>
                <h3>{title}</h3>
                <p>
                    <a href={institution_url}>{institution}</a> <br />
                    <span className="text-muted">{location}</span> <br />
                    {formatDate}<br />
                    <Button style={{ display: "inline" }} size="sm" variant="outline-primary" href={html}>HTML</Button>{' '}
                    <Button style={{ display: "inline" }} size="sm" variant="outline-primary" href={pdf}>PDF</Button>
                </p>
                <b>Abstract</b>{": "}<i>{abstract}</i>
                <br />
                <br />
                <Carousel>
                    {img.map((node, index) => (
                        <Carousel.Item key={`img_${title}_${index}`}>
                            <img src={`../${node.item}`} className="d-block w-100" alt="" />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </Layout>
    )
}

export default Seminar

/* EOF */
