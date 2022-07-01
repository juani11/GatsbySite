
// var fs = require('fs');
const fs = require('fs-extra')
const path = require(`path`)
const { URL } = require('url');
const fetch = require("node-fetch");
const axios = require('axios');
const { createRemoteFileNode, createFilePath } = require(`gatsby-source-filesystem`);

const PRODUCT_NODE_TYPE = 'commerceProduct';
const SHOP_PRODUCT_IMAGES_BASE_URL = "io/ioShop";
/*
const filesOfDirectoryQuery = graphql(`
        query($directory: String!) {
            allFile(filter: {relativeDirectory: {eq: $directory}}) {
                edges {
                    node {
                        extension
                        publicURL
                        relativePath
                        relativeDirectory
                        name
                    }
                }
            }
        }
`)*/

exports.sourceNodes = async ({
    actions,
    createNodeId,
    createContentDigest

}) => {

    const { createNode } = actions

    // Download data from a remote API.
    const url = new URL('/publico', process.env.GATSBY_API_URL)
    //const response = await fetch(`${process.env.GATSBY_API_URL}/publico`)
    const response = await fetch(url.href)


    const json = await response.json();

    if (!response.ok) {
        throw {
            statusCode: response.status,
            ...json
        }
    }

    const { data: products } = json;

    const processProduct = async (product) => {
        return {
            ...product,
            productId: product.id,
            id: createNodeId(product.id),
            internal: {
                type: PRODUCT_NODE_TYPE,
                contentDigest: createContentDigest(product)
            }
        }
    }

    await Promise.all(
        products.map(async (product) => createNode(await processProduct(product)))
    );




}



// called each time a node is created

// exports.onCreateNode = async ({
//     node, // the node that was just created
//     actions: { createNode, createNodeField },
//     createNodeId,
//     getCache,
// }) => {

//     if (node.internal.type === PRODUCT_NODE_TYPE) {

//         console.log("Node..");
//         console.log(node);

//         const ruta = `${process.env.IMAGES_BASE_URL}/${SHOP_PRODUCT_IMAGES_BASE_URL}/${node.name.replace(/\s/g, "")}`
//         console.log(`RUTA ARMADA: ${ruta}`);

//         let files = fs.readdirSync(`${ruta}`);

//         files.forEach(async filename => {
//             console.log("file:", filename);

//             const absolutePath = `${ruta}/${filename}`;
//             console.log("absolutePath:", absolutePath);

//             const fileAbsolutePath = __dirname /* find this node's absolute path */
//             console.log("fileAbsolutePath:", fileAbsolutePath);

//             const imageAbsolutePath = absolutePath /* do your get absolute path thing */
//             console.log("imageAboslutePath:", imageAbsolutePath);

//             const imageRelativePath = path.relative(fileAbsolutePath, imageAbsolutePath)
//             console.log("imageRelativePath:", imageRelativePath);
//             const relative = `io/ioShop/${node.name.replace(/\s/g, "")}/${filename}`
//             createNodeField({
//                 node,
//                 name: `imagen`,
//                 value: relative// `../../src/images/${SHOP_PRODUCT_IMAGES_BASE_URL}/${node.name}/${filename}`,
//             })
//         });
//     }
// }


// exports.createSchemaCustomization = ({ actions }) => {
//     const { createTypes } = actions
//     createTypes(`
//       type commerceProduct implements Node {
//         imagen: File @link(from: "fields.imagen")
//       }
//     `)
// }


