const githubApiQuery = `
  query($github_login: String!) {
    user(login: $github_login) {
      id
      name
      repositories(first: 10) {
        edges {
          node {
            id
            description
            forkCount
            diskUsage
            languages(first: 10) {
              edges {
                node {
                  id
                  color
                  name
                }
                size
              }
              totalCount
              totalSize
            }
            stargazerCount
            url
            name
          }
        }
      }
    }
  }
`

module.exports = {
  siteMetadata: {
    title: `Personal website`,
    description: `Julien Vanharen's personal website`,
    author: `Julien Vanharen`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-BN1EECX5R4"],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fig`,
        path: `${__dirname}/static/fig`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/fig/favicon.png`
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bib`,
        path: `${__dirname}/static/bib`,
      },
    },
    'gatsby-transformer-bibtex',
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_TOKEN,
        graphQLQuery: githubApiQuery,
        variables: {
          github_login: process.env.GITHUB_LOGIN
        }
      }
    }
  ],
}
