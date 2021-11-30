
const fetchAPI = (method, url, request) => {
    return fetch(`${process.env.GATSBY_API_URL}/${url}`, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...request
        })
    })
}

export const createPurchaseOrder = request => fetchAPI('POST', 'checkout/order', request)

