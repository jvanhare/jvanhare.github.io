/* Import React.js. */
import React, { Fragment } from 'react'
/* Import React Bootstrap components. */
import Container from 'react-bootstrap/Container'

export default class Teaching extends React.Component {
    render() {
        /* Get data from props. */
        var title = this.props.data.title
        var institution = this.props.data.institution
        var institution_url = this.props.data.institution_url
        var location = this.props.data.location
        var date_options = { year: 'numeric', month: 'long' };
        var date = new Date(this.props.data.date).toLocaleDateString("en-US", date_options);
        var description = this.props.data.description
        var obj = null
        /* Get objectives if present. */
        if (this.props.data.objectives)
            obj =
                <ul>
                    {this.props.data.objectives.map((teaching, index) => {
                        return <li key={`obj_teaching_${index}`}>
                            <Fragment>
                                <div dangerouslySetInnerHTML={{ __html: teaching.obj }} />
                            </Fragment>
                        </li>
                    })}
                </ul>
        /* Render item. */
        return (
            <Container fluid>
                <h3>{title}</h3>
                <p>
                    <a href={institution_url}>{institution}</a> <br />
                    <span className="text-muted">{location}</span> <br />
                    {date}
                </p>
                <i>
                    <Fragment>
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </Fragment>
                </i>
                <br />
                {obj}
            </Container >
        )
    }
}

/* EOF */
