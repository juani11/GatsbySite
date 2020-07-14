const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"} relativeDirectory: {eq:"io/ioLarge"}}) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  result.data.allFile.edges.forEach(({ node }) => {
    const finalSlug = '/' + ((node.name).replace(/\s/g, '-'));
    createPage({
      path: finalSlug,
      component: path.resolve(`./src/templates/detail.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        name: node.name
      },
    })
  })
}