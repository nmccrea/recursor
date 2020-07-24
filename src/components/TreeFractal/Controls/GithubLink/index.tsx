import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GithubImage } from "./styled"

const GithubLink = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            githubUrl
          }
        }
      }
    `
  )

  return (
    <a href={site.siteMetadata.githubUrl} target="blank">
      <GithubImage />
    </a>
  )
}

export default GithubLink
