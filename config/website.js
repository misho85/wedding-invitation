const base = {
  name: 'Pozivnica', // Site title.
  url: 'https://uros-maja-vencanje.netlify.com' // Domain of your website. No trailing slash!
};

module.exports = {
  /* meta tags */
  siteTitle: `Uros&Maja | ${base.name}`, // Manifest 'name'
  siteTitleAlt: base.name, // Title for JSONLD.
  siteShortName: base.name, // Manifest 'short_name'. MUST be shorter than 12 characters
  siteTitleTemplate: `%s | ${base.name}`, // Useful when you want titles to inherit from a template
  siteDescription: 'Pozivnica na vencanje Urosa i Maje.', // Manifest 'description'

  /* url */
  siteUrl: base.url, // Domain of your site. No trailing slash!
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-example/.

  siteLogo: '/banner.jpg', // Logo used for SEO.

  /* manifest */
  manifestBackgroundColor: '#141821', // Used for setting manifest background and progress theme colors.
  manifestThemeColor: '#f6ad55', // Used for setting manifest theme color .
  manifestDisplay: 'standalone',
  manifestIcon: 'static/favicon.svg' // This path is relative to the root of the site.
};
