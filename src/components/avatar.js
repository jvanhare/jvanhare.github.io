/* Import React.js. */
import React from "react"
/* Import Gatsby components. */
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderAvatar: file(relativePath: { eq: "photo_square.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.placeholderAvatar?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return <Img style={{ borderRadius: "50%", width: 250, height: 250, margin: "10px" }} fluid={data.placeholderAvatar.childImageSharp.fluid} />
}
export default Avatar

/* EOF */
