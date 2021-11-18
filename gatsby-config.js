/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /*  proxy: {

     url: "http://localhost:4000",
   }, */
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    /*{
      resolve: `gatsby-plugin-sharp`,
      options: {
icon:`faviconn`
      }
    }*/

    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-commerce-products`,
      options: {
        baseUrl: `localhost:4000`,
        protocol: `http`,
      }
    }
  ],
}
