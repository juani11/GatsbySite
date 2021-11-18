import cartActionTypes from "./cart.types";

const addItemToCart_ACTION = item => ({
    type: cartActionTypes.ADD_ITEM, payload: item
});

const removeItemFromCart_ACTION = item => ({
    type: cartActionTypes.REMOVE_ITEM, payload: item
});

const clearItemFromCart_ACTION = item => ({
    type: cartActionTypes.CLEAR_ITEM, payload: item
});

const clearCart_ACTION = () => ({
    type: cartActionTypes.CLEAR_CART
})

export {
    addItemToCart_ACTION,
    removeItemFromCart_ACTION,
    clearItemFromCart_ACTION,
    clearCart_ACTION
}