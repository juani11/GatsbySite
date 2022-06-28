import purchaseOrderActionTypes from "./purchase-order.types";

const startCreatePurchaseOrder = () => ({
    type: purchaseOrderActionTypes.START_CREATE_PURCHASE_ORDER
})

const successCreatePurchaseOrder = (preferenceId, shippingData) => ({
    type: purchaseOrderActionTypes.SUCCESS_CREATE_PURCHASE_ORDER,
    payload: { preferenceId, shippingData }
})

const errorCreatePurchaseOrder = error => ({
    type: purchaseOrderActionTypes.ERROR_CREATE_PURCHASE_ORDER,
    payload: error
})

export {
    startCreatePurchaseOrder,
    successCreatePurchaseOrder,
    errorCreatePurchaseOrder
}