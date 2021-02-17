/* Import React.js. */
import React from 'react'
/* Import React Bootstrap components. */
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
/* Import GitHub Octicon icons. */
import { StarIcon, GitForkIcon } from '@primer/octicons-react'
/* Import Font Awesome icons. */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* Import my components. */
import Bar from "../components/bar"

export default class Education extends React.Component {
    render() {
        var data = []
        var total = this.props.data.languages.totalSize
        var color = this.props.data.languages.edges.map(function (edge) { return edge.node.color })
        var lang = this.props.data.languages.edges.map(function (edge) { return edge.node.name })
        var sizes = this.props.data.languages.edges.map(function (edge) { return edge.size })
        for (const [i, l] of lang.entries()) data.push({ 'lang': l, 'color': color[i], 'percent': sizes[i] / total * 100. })
        data = data.sort(function (a, b) { return b.percent - a.percent; });
        return (
            <Card>
                <Card.Body>
                    <Card.Title><b><a href={this.props.data.url}>{this.props.data.name}</a></b></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.data.description}</Card.Subtitle>
                    <Card.Text>
                        <FontAwesomeIcon icon={faStar} />&nbsp;{this.props.data.stargazerCount}&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faCodeBranch} />&nbsp;{this.props.data.forkCount}
                        <br />
                        <Bar data={data} />
                        <Container>
                            <Row xs={2} md={2} lg={2}>
                                {data.map(data => <Col><span className={"github-dot " + data.lang}></span>&nbsp;{data.lang}</Col>)}
                            </Row>
                        </Container>
                    </Card.Text>

                </Card.Body>
            </Card>
        )
    }
}

/* EOF */
