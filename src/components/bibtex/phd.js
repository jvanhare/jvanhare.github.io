/* Import React.js. */
import React from "react"
/* Import React Bootstrap components. */
import Button from 'react-bootstrap/Button'

export default class PhD extends React.Component {
    render() {
        var data = this.props.data
        return (
            <li>
                {data.authors}.&nbsp;
                <b>{data.title}.</b>&nbsp;
                <i>Ph.D. thesis</i>.&nbsp;
                {data.school}.&nbsp;
                {data.month}&nbsp;
                {data.year}.&nbsp;
                <Button style={{ display: "inline" }} size="sm" variant="outline-primary" href={"/pdf/" + data.pdf}>PDF</Button>
            </li>
        )
    }
}

/* EOF */
