import purchaseOrderActionTypes from "./purchase-order.types";

const startCreatePurchaseOrder = () => ({
    type: purchaseOrderActionTypes.START_CREATE_PURCHASE_ORDER
})

const successCreatePurchaseOrder = (preferenceId, initPoint, shippingData) => ({
    type: purchaseOrderActionTypes.SUCCESS_CREATE_PURCHASE_ORDER,
    payload: { preferenceId, initPoint, shippingData }
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