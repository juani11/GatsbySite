import purchaseOrderActionTypes from "./purchase-order.types"

export const purchaseOrderReducer = (state, action) => {
    switch (action.type) {
        case purchaseOrderActionTypes.START_CREATE_PURCHASE_ORDER:
            return {
                ...state,
                loading: true,
                mp_preferenceId: null,
                shipping: null,
                error: false
            }
        case purchaseOrderActionTypes.SUCCESS_CREATE_PURCHASE_ORDER:

            localStorage.setItem("purchaseOrder", JSON.stringify(action.payload));

            return {
                ...state,
                loading: false,
                mp_preferenceId: action.payload.preferenceId,
                shipping: action.payload.shippingData,
                error: false
            }
        case purchaseOrderActionTypes.ERROR_CREATE_PURCHASE_ORDER:
            return {
                ...state,
                loading: false,
                mp_preferenceId: null,
                shipping: null,
                error: true
            }
        default:
            return state
    }
}
