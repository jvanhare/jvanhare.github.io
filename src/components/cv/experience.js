/* Import React.js. */
import React, { Fragment } from 'react'
/* Import React Bootstrap components. */
import Container from 'react-bootstrap/Container'

export default class Experience extends React.Component {
    render() {
        /* Get data from props. */
        var title = this.props.data.title
        var show = this.props.data.show
        var company = this.props.data.company
        var company_url = this.props.data.company_url
        var location = this.props.data.location
        var date_options = { year: 'numeric', month: 'long' };
        var date_start = new Date(this.props.data.date_start).toLocaleDateString("en-US", date_options);
        var date_end = new Date(this.props.data.date_end).toLocaleDateString("en-US", date_options);
        var description = this.props.data.description
        var date = null
        var obj = null
        /* Get objectives if present. */
        if (this.props.data.objectives)
            obj =
                <ul>
                    {this.props.data.objectives.map((exp, index) => {
                        return <li key={`obj_exp_${index}`}>
                            <Fragment>
                                <div dangerouslySetInnerHTML={{ __html: exp.obj }} />
                            </Fragment>
                        </li>
                    })}
                </ul>
        /* Treat the date. */
        if (this.props.data.date_end) date = date_start + " - " + date_end
        else date = "Since " + date_start
        /* Render item. */
        if (show) {
            return (
                <Container fluid>
                    <h3>{title}</h3>
                    <p>
                        <a href={company_url}>{company}</a> <br />
                        <span className="text-muted">{location}</span> <br />
                        {date}
                    </p>
                    <i>
                        <Fragment>
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </Fragment>
                    </i>
                    <br/>
                    {obj}
                </Container >
            )
        }
        return (null)
    }
}

/* EOF */
