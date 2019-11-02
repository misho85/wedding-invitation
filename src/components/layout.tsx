/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import styled from '@emotion/styled';
import { css, Styled, jsx } from "theme-ui"
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import SEO from "./seo"
import pozadina from '../../static/pozadina.jpg'

type LayoutProps = { children?: React.ReactNode; className?: string }

const query = graphql`
  query {
    file(relativePath: { eq: "pozadina.jpg" }) {
      img: childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

const Slika = styled(Img)`
  position: absolute !important;
  overflow: hidden;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

const Layout = ({ children, className }: LayoutProps) => {
  const data = useStaticQuery(query);
  console.log('data', data)
  return (
    <Styled.root data-testid="theme-root">
      <Global
        styles={css({
          "*": {
            boxSizing: `inherit`,
            "&:before": {
              boxSizing: `inherit`,
            },
            "&:after": {
              boxSizing: `inherit`,
            },
          },
          html: {
            fontSize: `18px`,
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
            WebkitFontSmoothing: `antialiased`,
            MozOsxFontSmoothing: `grayscale`,
          },
          "::selection": {
            backgroundColor: `primary`,
            color: `white`,
          },
        })}
      />
      <SEO />
      <main className={className}>
        <Slika
          fluid={data.file.img.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt=""
        />
        {children}
      </main>
    </Styled.root>
  )
}

export default Layout
