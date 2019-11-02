require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitle: `Pozivnica`,
    siteTitleAlt: `Pozivnica | Uros&Maja`,
    siteHeadline: `Pozivnica | Uros&Maja`,
    siteUrl: `https://uros&maja.vencanje.netlify.com`,
    siteDescription: `Pozivnica na vencanje Urosa i Maje`,
    siteLanguage: `rs`,
    siteImage: `src/assets/banner.jpg`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`
      }
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pozivnica | Uros&Maja`,
        short_name: `Pozivnica`,
        description: `Pozivnica na vencanje Urosa i Maje`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icon: `src/assets/favicon.svg`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
