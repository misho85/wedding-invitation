import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/use-site-metadata"

const defaultProps = {
  title: ``,
  description: false,
  pathname: false,
  image: false,
  children: null,
}

type Props = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  children?: React.ReactNode
}

const SEO = ({ title, description, pathname, image, children }: Props) => {
  const site = useSiteMetadata()

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteImage: defaultImage,
  } = site

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  }

  return (
    <Helmet title={title} defaultTitle={defaultTitle} titleTemplate={`%s | ${siteTitle}`}>
      <html lang='rs' />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      {children}
    </Helmet>
  )
}

export default SEO

SEO.defaultProps = defaultProps
