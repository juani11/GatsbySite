import cartActionTypes from "./cart.types";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "./cart.utils"


export const cartReducer = (state, action) => {
    let modifiedCart;
    switch (action.type) {

        case cartActionTypes.ADD_ITEM:

            modifiedCart = addItemToCart([...state.cart], action.payload)

            localStorage.setItem("cart", JSON.stringify(modifiedCart));

            return {
                ...state,
                cart: modifiedCart
            }
        case cartActionTypes.REMOVE_ITEM:

            modifiedCart = removeItemFromCart([...state.cart], action.payload);

            localStorage.setItem("cart", JSON.stringify(modifiedCart));

            return {
                ...state,
                cart: modifiedCart
            }
        case cartActionTypes.CLEAR_ITEM:
            modifiedCart = clearItemFromCart([...state.cart], action.payload);

            localStorage.setItem("cart", JSON.stringify(modifiedCart));

            return {
                ...state,
                cart: modifiedCart
            }

        case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        case cartActionTypes.SET_PURCHASE_ORDER_CREATED:
            return {
                ...state,
                purchaseOrderCreated: action.payload
            }
        default:
            return state
    }
}