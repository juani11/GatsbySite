import React, { createContext, useReducer } from "react"


import {
    addItemToCart_ACTION,
    clearCart_ACTION,
    clearItemFromCart_ACTION,
    removeItemFromCart_ACTION,
    setPurschaseOrderCreated_ACTION
} from "../../reducer/cart/cart.actions";
import { cartReducer } from "../../reducer/cart/cart.reducer";
import { isBrowser } from "../../utils/functions";



const CartContext = createContext({
    cart: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    clearCart: () => { },
    cantProducts: () => { },
    subTotal: () => { }
});

const initialState = {
    cart: [],
    purchaseOrderCreated: false
}


// const windowGlobal = typeof window !== 'undefined' && window


if (isBrowser()) {
    if (window.localStorage.getItem('cart')) {
        const cart = JSON.parse(window.localStorage.getItem('cart'))

        initialState.cart = cart
    }


    if (window.localStorage.getItem('purchaseOrder')) {
        console.log("HAY purchaseOrder creada!!!!!!");
        initialState.purchaseOrderCreated = true

    }
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addItemToCart = (productToAdd, qty = 1) => dispatch(addItemToCart_ACTION({ productToAdd, qty }))
    const removeItemFromCart = productId => dispatch(removeItemFromCart_ACTION(productId))
    const clearItemFromCart = productId => dispatch(clearItemFromCart_ACTION(productId));
    const clearCart = () => dispatch(clearCart_ACTION())

    const cantProducts = () => {

        if (state.cart.length == 0)
            return 0

        return state.cart.reduce(
            (total, current) => total + current.qty,
            0
        )
    }

    const subTotal = () => {
        if (state.cart.length == 0)
            return 0
        return state.cart.reduce(
            (total, current) => total + (current.price * current.qty),
            0
        )
    }

    const setPurschaseOrderCreated = value => dispatch(setPurschaseOrderCreated_ACTION(value))

    return (
        <CartContext.Provider value={
            {
                cart: state.cart,
                purchaseOrderCreated: state.purchaseOrderCreated,
                setPurschaseOrderCreated,
                addItemToCart,
                removeItemFromCart,
                clearItemFromCart,
                clearCart,
                cantProducts,
                subTotal
            }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }