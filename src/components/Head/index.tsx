import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { typography } from "styles/utilities"
import { Helmet } from "react-helmet"

interface Props {
  description?: string
  lang?: string
  meta?: Array<object>
  title: string
}

const Head = ({ description = ``, lang = `en`, meta = [], title }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={meta}
    >
      <title>{title}</title>
      <meta name={`description`} content={metaDescription} />
      <meta property={`og:title`} content={title} />
      <meta property={`og:description`} content={metaDescription} />
      <meta property={`og:type`} content={`website`} />
      <meta name={`twitter:card`} content={`summary`} />
      <meta name={`twitter:creator`} content={site.siteMetadata.author} />
      <meta name={`twitter:title`} content={title} />
      <meta name={`twitter:description`} content={metaDescription} />
      <link href={typography.googleFontsUrl} rel="stylesheet" />
    </Helmet>
  )
}

export default Head
