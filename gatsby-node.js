const path = require(`path`)
require("node-fetch");
exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions

  /*   //Create dinamic ilustrations page
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
  
  
    //Create dinamic products page
    const products = await graphql(`
    query {
      allCommerceProduct {
        edges {
          node {
            id
            name
            description
            price
            category {
              id
              name
            }
          }
        }
      }
    `)
  
    products.data.allCommerceProduct.edges.forEach(({ node }) => {
      const finalSlug = '/' + ((node.name).replace(/\s/g, '-'));
      createPage({
        path: finalSlug,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          product: node
        },
      })
    }) */




  const ilustrations = graphql(`
    query {
      allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"} relativeDirectory: {eq:"io/ioLarge"}}) {
        edges {
          node {
            name
          }
        }
      }
    }
  `).then(result => {
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
      });
    });
  })

  const products = graphql(`
  query {
    commerceProducts: allCommerceProduct {
      edges {
        node {
          id
          name
          description
          regular_price
          category {
            id
            name
          }
          options {
            id
            name
            possibleValues
          }
          variants {
            sku
            price
            options {
              id
              name
              value
            }
          }
        }
      }
    }
  
    commerceProductsImages:allCommerceProductImagesJson {
      edges {
        node {
          title
          images {
            src {
              absolutePath
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }

  }
  `).then(result => {
    result.data.commerceProducts.edges.forEach(({ node }) => {

      const productImages = (result.data.commerceProductsImages.edges)
        .find(({ node: imageNode }) => imageNode.title === node.name)

      const finalSlug = '/' + ((node.name).replace(/\s/g, '-'));
      createPage({
        path: finalSlug,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          product: node,
          productImages: productImages.node.images,
          dirName: `${process.env.SHOP_IMAGES_BASE_URL}/${node.name}`
        },
      });
    });
  })

  return Promise.all([ilustrations, products])

}


