/* Import React.js. */
import React from 'react'
/* Import Gatsby components. */
import { Link } from "gatsby"

export default class Seminar extends React.Component {
    render() {
        /* Get data from props. */
        var title = this.props.data.title
        var link = this.props.data.link
        var institution = this.props.data.institution
        var institution_url = this.props.data.institution_url
        var location = this.props.data.location
        var opt = { day: 'numeric', year: 'numeric', month: 'long' };
        var date = new Date(this.props.data.date).toLocaleDateString("en-US", opt);
        return (
            <li>
                <b><Link to={"/" + link}>{title}</Link></b>&nbsp;
                <a href={institution_url}><i>{institution}</i></a>.&nbsp;
                {location}.&nbsp;
                {date}.&nbsp;
            </li>
        )
    }
}

/* EOF */
