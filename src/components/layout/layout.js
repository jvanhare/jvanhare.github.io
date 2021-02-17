/* Import React.js. */
import React from 'react'
import PropTypes from "prop-types"
/* Import React Bootstrap components. */
import Container from 'react-bootstrap/Container'
/* Import my components. */
import Header from "../../components/layout/header"
import Footer from "../../components/layout/footer"

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          {this.props.children}
        </Container>
        <Footer />
      </>
    )
  }
}
Layout.propTypes = { children: PropTypes.element.isRequired }

/* EOF */
