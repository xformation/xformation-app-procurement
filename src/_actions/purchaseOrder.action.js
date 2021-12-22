
import { purchaseOrderConstants } from '../_constants';
import { purchaseOrderServices } from "../_services"
import { alert, commonFunctions } from '../_utilities';

export const purchaseOrderAction = {
    addPurchaseOrder,
    getPurchaseOrder,
    searchPurchaseOrder,
    searchApprovePurchaseOrder
}

function searchPurchaseOrder(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: purchaseOrderConstants.SEARCH_PURCHASE_ORDER_REQUEST,
            data: null
        }));
        purchaseOrderServices.searchPurchaseOrder(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.SEARCH_PURCHASE_ORDER_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.SEARCH_PURCHASE_ORDER_FALIURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: purchaseOrderConstants.SEARCH_PURCHASE_ORDER_FALIURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}
function searchApprovePurchaseOrder(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: purchaseOrderConstants.SEARCH_APPROVE_PURCHASE_ORDER_REQUEST,
            data: null
        }));
        purchaseOrderServices.approvePurchaseOrder(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.SEARCH_APPROVE_PURCHASE_ORDER_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.SEARCH_APPROVE_PURCHASE_ORDER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: purchaseOrderConstants.SEARCH_APPROVE_PURCHASE_ORDER_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}
function getPurchaseOrder(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: purchaseOrderConstants.GET_PURCHASE_ORDER_REQUEST,
            data: null
        }));
        purchaseOrderServices.getPurchaseOrder(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.GET_PURCHASE_ORDER_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.GET_PURCHASE_ORDER_FALIURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: purchaseOrderConstants.GET_PURCHASE_ORDER_FALIURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}
function addPurchaseOrder(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: purchaseOrderConstants.ADD_PURCHASE_ORDER_REQUEST,
            data: null
        }));
        purchaseOrderServices.addPurchaseOrder(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.ADD_PURCHASE_ORDER_SUCCESS,
                            data: response
                        }));
                        alert.success(response.message);
                    } else {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.ADD_PURCHASE_ORDER_FALIURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: purchaseOrderConstants.ADD_PURCHASE_ORDER_FALIURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function dispatchFunction(data) {
    // if (data.data && data.data.code === 401) {
    //     commonFunctions.onLogout();
    //     return {
    //         type: authConstants.USER_LOGOUT,
    //         data: null
    //     };
    // }
    return {
        type: data.type,
        data: data.data
    };
}