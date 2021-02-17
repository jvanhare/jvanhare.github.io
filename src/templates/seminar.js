/* Import React.js. */
import React from "react"
/* Import React Bootstrap components. */
import Button from 'react-bootstrap/Button'
/* Import my components. */
import Layout from "../components/layout/layout"

const Seminar = props => {
    const { pageContext } = props
    const { title, html, pdf, institution, institution_url, location, date, abstract } = pageContext
    var opt = { day: 'numeric', year: 'numeric', month: 'long' };
    var formatDate = new Date(date).toLocaleDateString("en-US", opt);
    return (
        <Layout>
            <h3>{title}</h3>
            <p>
                <a href={institution_url}>{institution}</a> <br />
                <span className="text-muted">{location}</span> <br />
                {formatDate}<br />
                <Button style={{ display: "inline" }} size="sm" variant="outline-primary" href={html}>HTML</Button>{' '}
                <Button style={{ display: "inline" }} size="sm" variant="outline-primary" href={pdf}>PDF</Button>
            </p>
            <b>Abstract</b>{": "}<i>{abstract}</i>
        </Layout>
    )
}

export default Seminar

/* EOF */
