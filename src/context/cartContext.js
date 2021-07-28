import React, { createContext, useReducer } from "react"
import { cartReducer } from "../reducer/carReducer";


const CartContext = createContext();

const initialState = {
    cart: []
}


const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (productToAdd, qty = 1) => {
        console.log('Add to cart!');

        dispatch({ type: 'ADD_TO_CART', payload: { productToAdd, qty } })
    }

    const clearCart = () => {
        console.log('Cart clear!');
        dispatch({ type: 'CLEAR_CART' })

    }



    const cantProducts = () => {

        if (state.cart.length == 0)
            return 0

        return state.cart.reduce(
            (total, current) => total + current.qty,
            0
        )
    }

    const deleteFromCart = (productId, all) => {
        dispatch({ type: 'DELETE_FROM_CART', payload: { productId, all } })

    }


    const subTotal = () => {
        if (state.cart.length == 0)
            return 0
        return state.cart.reduce(
            (total, current) => total + (current.price * current.qty),
            0
        )
    }

    return (
        <CartContext.Provider value={{ cart: state.cart, addToCart, clearCart, cantProducts, deleteFromCart, subTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }