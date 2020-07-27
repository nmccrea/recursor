import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Panel } from "components/parts/Panel"
import { HiddenContainer, H1, GithubImage } from "./styled"

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            githubUrl
          }
        }
      }
    `
  )

  return (
    <HiddenContainer>
      <Panel>
        <H1>{site.siteMetadata.title}</H1>
      </Panel>

      <a href={site.siteMetadata.githubUrl} target="blank">
        <GithubImage />
      </a>
    </HiddenContainer>
  )
}

export default Header
