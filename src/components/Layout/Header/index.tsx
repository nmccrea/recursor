import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { HeaderPanel, H1 } from "./styled"

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <HeaderPanel>
      <H1>{site.siteMetadata.title}</H1>
    </HeaderPanel>
  )
}

export default Header
