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
                {data.school},&nbsp;
                {data.month}&nbsp;
                {data.year}.&nbsp;
                <Button style={{ display: "inline" }} size="sm" variant="outline-primary" href={data.url}>PDF</Button>
            </li>
        )
    }
}

/* EOF */
