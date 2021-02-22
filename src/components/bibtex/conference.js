/* Import React.js. */
import React from "react"

export default class Conference extends React.Component {
    render() {
        var data = this.props.data
        var authors_list = data.authors.slice(0, -1).join(', ') + ', and ' + data.authors.slice(-1)
        return (
            <li>
                {authors_list}.&nbsp;
                <b>{data.title}.</b>&nbsp;
                <i>{data.booktitle}</i>.&nbsp;
                {data.address},&nbsp;
                {data.month}&nbsp;
                {data.year}.&nbsp;
                <a href={"https://doi.org/" + data.doi}>[{data.doi}]</a>
            </li>
        )
    }
}

/* EOF */
