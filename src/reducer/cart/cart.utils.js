export const addItemToCart = (cart, { productToAdd, qty }) => {

    const indexOfProduct = cart.findIndex(product =>
        product.sku === productToAdd.sku
    )

    //Product already exists in cart
    if (indexOfProduct !== -1) {
        //Update Quantity
        cart[indexOfProduct].qty += qty
    }
    else {
        productToAdd.qty = qty
        cart.push(productToAdd)
    }

    return cart;
}

export const removeItemFromCart = (cart, productId) => {

    const indexOfProductToDelete = cart.findIndex(product =>
        product.sku === productId
    )

    if (cart[indexOfProductToDelete].qty == 1)
        cart.splice(indexOfProductToDelete, 1);
    else {
        cart[indexOfProductToDelete].qty -= 1
    }

    return cart;

}

export const clearItemFromCart = (cart, productId) => cart.filter(cartItem => cartItem.sku !== productId)
