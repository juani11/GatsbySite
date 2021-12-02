import purchaseOrderActionTypes from "./purchase-order.types"

export const purchaseOrderReducer = (state, action) => {
    switch (action.type) {
        case purchaseOrderActionTypes.START_CREATE_PURCHASE_ORDER:
            return {
                ...state,
                loading: true,
                mp_preferenceId: null,
                error: false
            }
        case purchaseOrderActionTypes.SUCCESS_PURCHASE_ORDER:
            return {
                ...state,
                loading: false,
                mp_preferenceId: action.payload,
                error: false
            }
        case purchaseOrderActionTypes.ERROR_PURCHASE_ORDER:
            return {
                ...state,
                loading: false,
                mp_preferenceId: null,
                error: true
            }
        default:
            return state
    }
}
