import React, { createContext, useReducer } from "react"

import {
    addItemToCart_ACTION,
    clearCart_ACTION,
    clearItemFromCart_ACTION,
    removeItemFromCart_ACTION
} from "../../reducer/cart/cart.actions";
import { cartReducer } from "../../reducer/cart/cart.reducer";


const CartContext = createContext();

const initialState = {
    cart: []
}

const windowGlobal = typeof window !== 'undefined' && window


if (windowGlobal.localStorage) {
    if (windowGlobal.localStorage.getItem('cart')) {
        const cart = JSON.parse(windowGlobal.localStorage.getItem('cart'))

        initialState.cart = cart
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
            (total, current) => total + (current.regular_price * current.qty),
            0
        )
    }

    return (
        <CartContext.Provider value={
            {
                cart: state.cart,
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