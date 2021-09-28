

export const cartReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_TO_CART':
            const { productToAdd, qty } = action.payload
            const copy = [...state.cart]


            const indexOfProduct = copy.findIndex(product =>
                product.id === productToAdd.id
            )


            //Product already exists in cart
            if (indexOfProduct !== -1) {
                //Update Quantity
                copy[indexOfProduct].qty += qty
            }
            else {
                productToAdd.qty = qty
                copy.push(productToAdd)
            }

            localStorage.setItem("cart", JSON.stringify(copy));

            return {
                ...state,
                cart: copy
            }
        case 'DELETE_FROM_CART':
            const { productId, all } = action.payload

            const copy_cart = [...state.cart]

            const indexOfProductToDelete = copy_cart.findIndex(product =>
                product.id === productId
            )

            if (copy_cart[indexOfProductToDelete].qty == 1 || all)
                copy_cart.splice(indexOfProductToDelete, 1);
            else {
                copy_cart[indexOfProductToDelete].qty -= 1
            }

            localStorage.setItem("cart", JSON.stringify(copy_cart));

            return {
                ...state,
                cart: copy_cart
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: []

            }
        default:
            return state
    }
}