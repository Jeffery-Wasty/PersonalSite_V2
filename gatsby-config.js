module.exports = {
  siteMetadata: {
    title: 'My Site',
    siteUrl: 'https://jefferywasty.me',
    description: 'Personal website',
    twitterUsername: '@JeffWasty',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
