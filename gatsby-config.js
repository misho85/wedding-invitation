const website = require('./config/website');

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteTitle: website.siteTitle,
    siteTitleAlt: website.siteTitleAlt,
    siteUrl: website.siteUrl + pathPrefix,
    siteDescription: website.siteDescription,
    siteImage: website.siteLogo
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.siteTitle,
        short_name: website.siteShortName,
        description: website.siteDescription,
        start_url: `/`,
        background_color: website.manifestBackgroundColor,
        theme_color: website.manifestThemeColor,
        display: website.manifestDisplay,
        icon: website.manifestIcon
      }
    },
    `gatsby-plugin-netlify`
  ]
};
