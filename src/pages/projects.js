/* Import React.js. */
import React from "react"
/* Import React Bootstrap components. */
import CardColumns from 'react-bootstrap/CardColumns'
/* Import Gatsby components. */
import { graphql } from "gatsby"
/* Import my components. */
import Layout from "../components/layout/layout"
import Github from "../components/github"
/* Import my CSS. */
import "../scss/main.scss";

export default function Projects({ data }) {
    let repos = data.allGithubData.edges[0].node.data.user.repositories
    return (
        <Layout>
            <h1>Projects</h1>
            <h2>GitHub repositories</h2>
            <CardColumns>
                {repos.edges.map(({ node }, index) => (
                    <Github data={node} />
                ))}
            </CardColumns>
        </Layout>
    )
}

export const query = graphql`
  {
    allGithubData {
      edges {
        node {
          data {
            user {
              name
              repositories {
                edges {
                  node {
                    description
                    diskUsage
                    forkCount
                    languages {
                      totalCount
                      totalSize
                      edges {
                        size
                        node {
                          color
                          name
                        }
                      }
                    }
                    name
                    stargazerCount
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

/* EOF */
