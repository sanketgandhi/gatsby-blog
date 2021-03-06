module.exports = {
  pathPrefix: '/gatsby-blog',
  siteMetadata: {
    title: 'Emma Wedekind',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        logo: 'src/images/logo.svg',
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-favicon`,
  ],
}
