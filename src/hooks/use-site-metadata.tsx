import { graphql, useStaticQuery } from "gatsby"

type Props = {
  site: {
    siteMetadata: {
      [key: string]: string
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteUrl
          siteDescription
          siteImage
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
