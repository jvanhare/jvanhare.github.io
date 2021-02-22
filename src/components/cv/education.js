/* Import React.js. */
import React, { Fragment } from 'react'
/* Import React Bootstrap components. */
import Container from 'react-bootstrap/Container'

export default class Education extends React.Component {
    render() {
        /* Get data from props. */
        var title = this.props.data.title
        var show = this.props.data.show
        var pdf = this.props.data.pdf
        var company = this.props.data.company
        var company_url = this.props.data.company_url
        var institution = this.props.data.institution
        var institution_url = this.props.data.institution_url
        var location = this.props.data.location
        var date_options = { year: 'numeric', month: 'long' };
        var date_start = new Date(this.props.data.date_start).toLocaleDateString("en-US", date_options);
        var date_end = new Date(this.props.data.date_end).toLocaleDateString("en-US", date_options);
        var description = this.props.data.description
        var obj = null
        /* Treat title with optional PDF link. */
        if (pdf) title = <a href={"/pdf/" + pdf}>{title}</a>
        /* Treat the institution and the company. */
        institution = <a href={institution_url}>{institution}</a>
        if (company) institution = <span><a href={company_url}>{company}</a> &amp; {institution}</span>
        /* Get objectives if present. */
        if (this.props.data.objectives)
            obj =
                <ul>
                    <br />
                    {this.props.data.objectives.map((edu, index) => {
                        return <li key={`obj_edu_${index}`}>
                            <Fragment>
                                <div dangerouslySetInnerHTML={{ __html: edu.obj }} />
                            </Fragment>
                        </li>
                    })}
                </ul>
        /* Render item. */
        if (show) {
            return (
                <div className="timeline">
                    <Container fluid>
                        <h3>{title}</h3>
                        <p>
                            {institution} <br />
                            <span className="text-muted">{location}</span> <br />
                            {date_start} - {date_end}
                        </p>
                        <i>
                            <Fragment>
                                <div dangerouslySetInnerHTML={{ __html: description }} />
                            </Fragment>
                        </i>
                        {obj}
                    </Container >
                </div>
            )
        }
        return (null)
    }
}

/* EOF */
