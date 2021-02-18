/* Import React.js. */
import React from "react"
/* Import React Bootstrap components. */
import Container from 'react-bootstrap/Container'
/* Import Gatsby components. */
import { graphql } from "gatsby"
/* Import my components. */
import Layout from "../components/layout/layout"
import Article from "../components/bibtex/article"
import Conference from "../components/bibtex/conference"
import PhD from "../components/bibtex/phd"
/* Import my CSS. */
import "../scss/main.scss";

export default function Publications({ data }) {
  return (
    <Layout>
      <Container fluid>
        <h1>Publications</h1>
        <h2>Journal Articles</h2>
        <ol>
          {data.articles.edges.map(({ node }, index) => (
            <Article key={`article_${index}`} data={node} />
          ))}
        </ol>
        <h2>Conference Articles</h2>
        <ol>
          {data.conferences.edges.map(({ node }, index) => (
            <Conference key={`conference_${index}`} data={node} />
          ))}
        </ol>
        <h2>Theses</h2>
        <ol>
          {data.phd.edges.map(({ node }, index) => (
            <PhD key={`phd_${index}`} data={node} />
          ))}
        </ol>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query {
    articles: allReference(filter: {entry_type: {eq: "article"}, authors: {in: "Julien Vanharen"}}) {
      edges {
        node {
          title
          authors
          journal
          volume
          year
          pages
          doi
        }
      }
      pageInfo {
        perPage
      }
    }
    reference {
      id
    }
    conferences: allReference(filter: {entry_type: {eq: "inproceedings"}, authors: {in: "Julien Vanharen"}}) {
      edges {
        node {
          title
          authors
          booktitle
          address
          month
          year
          doi
        }
      }
      pageInfo {
        perPage
      }
    }
    reference {
      id
    }
    phd: allReference(filter: {entry_type: {eq: "phdthesis"}, authors: {in: "Julien Vanharen"}}) {
      edges {
        node {
          title
          authors
          school
          month
          year
          pdf
        }
      }
      pageInfo {
        perPage
      }
    }
    reference {
      id
    }
  }
`

/* EOF */
