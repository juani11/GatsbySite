
const fetch = require("node-fetch");

exports.sourceNodes = async ({
    actions,
    createNodeId,
    createContentDigest

}) => {

    const { createNode } = actions

    // Download data from a remote API.
    const response = await fetch('https://mariajuliatagliero.com/server/public/publico')


    const json = await response.json();

    if (!response.ok) {
        throw {
            statusCode: response.status,
            ...json
        }
    }

    const { data: products } = json;

    const processProduct = async (product) => ({
        ...product,
        id: createNodeId(product.id),
        internal: {
            type: 'commerceProduct',
            contentDigest: createContentDigest(product)
        }
    })


    await Promise.all(
        products.map(async (product) => createNode(await processProduct(product)))
    );




}