/* Import React.js. */
import React from "react"

export default class Article extends React.Component {
    render() {
        var data = this.props.data
        var authors_list = data.authors.slice(0, -1).join(', ') + ' and ' + data.authors.slice(-1)
        return (
            <li>
                {authors_list}.&nbsp;
                <b>{data.title}.</b>&nbsp;
                <i>{data.journal}</i>&nbsp;
                {data.volume}&nbsp;
                ({data.year})&nbsp;
                {data.pages.replace("--", "-")}.&nbsp;
                <a href={"https://doi.org/" + data.doi}>[{data.doi}]</a>
            </li>
        )
    }
}

/* EOF */
