import { purchaseOrderConstants } from '../_constants';
import { purchaseOrderServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const purchaseOrderAction = {
    addPurchaseOrder,
    approvePurchaseOrder,
    deletePurchaseOrder,
    getPurchaseOrder,
    searchPurchaseOrder,
    updatePurchaseOrder
};

function addPurchaseOrder(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: purchaseOrderConstants.ADD_PURCHASE_ORDER_REQUEST,
            data: null
        }));
        purchaseOrderServices.addPurchaseOrder(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.ADD_PURCHASE_ORDER_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.ADD_PURCHASE_ORDER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: purchaseOrderConstants.ADD_PURCHASE_ORDER_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function approvePurchaseOrder(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: purchaseOrderConstants.APPROVE_PURCHASE_ORDER_REQUEST,
            data: null
        }));
        purchaseOrderServices.approvePurchaseOrder(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.APPROVE_PURCHASE_ORDER_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.APPROVE_PURCHASE_ORDER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: purchaseOrderConstants.APPROVE_PURCHASE_ORDER_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function deletePurchaseOrder(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: purchaseOrderConstants.DELETE_PURCHASE_ORDER_REQUEST,
            data: null
        }));
        purchaseOrderServices.deletePurchaseOrder(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.DELETE_PURCHASE_ORDER_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.DELETE_PURCHASE_ORDER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: purchaseOrderConstants.DELETE_PURCHASE_ORDER_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getPurchaseOrder(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: purchaseOrderConstants.GET_PURCHASE_ORDER_REQUEST,
            data: null
        }));
        purchaseOrderServices.getPurchaseOrder(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.GET_PURCHASE_ORDER_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.GET_PURCHASE_ORDER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: purchaseOrderConstants.GET_PURCHASE_ORDER_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
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
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.SEARCH_PURCHASE_ORDER_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.SEARCH_PURCHASE_ORDER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: purchaseOrderConstants.SEARCH_PURCHASE_ORDER_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updatePurchaseOrder(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: purchaseOrderConstants.UPDATE_PURCHASE_ORDER_REQUEST,
            data: null
        }));
        purchaseOrderServices.updatePurchaseOrder(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.UPDATE_PURCHASE_ORDER_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: purchaseOrderConstants.UPDATE_PURCHASE_ORDER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: purchaseOrderConstants.UPDATE_PURCHASE_ORDER_FAILURE,
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