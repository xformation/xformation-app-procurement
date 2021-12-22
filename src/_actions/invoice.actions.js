import { invoiceConstants } from '../_constants';
import { invoiceServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const invoiceAction = {
    addInvoice,
    deleteInvoice,
    getInvoice,
    searchInvoice,
    updateInvoice,
    getNewInvoice
};

function addInvoice(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: invoiceConstants.ADD_INVOICE_REQUEST,
            data: null
        }));
        invoiceServices.addInvoice(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.ADD_INVOICE_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.ADD_INVOICE_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: invoiceConstants.ADD_INVOICE_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function deleteInvoice(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: invoiceConstants.DELETE_INVOICE_REQUEST,
            data: null
        }));
        invoiceServices.deleteInvoice(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.DELETE_INVOICE_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.DELETE_INVOICE_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: invoiceConstants.DELETE_INVOICE_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getInvoice(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: invoiceConstants.GET_INVOICE_REQUEST,
            data: null
        }));
        invoiceServices.getInvoice(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.GET_INVOICE_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.GET_INVOICE_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: invoiceConstants.GET_INVOICE_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function searchInvoice(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: invoiceConstants.SEARCH_INVOICE_REQUEST,
            data: null
        }));
        invoiceServices.searchInvoice(data)
            .then(
                response => {
                    if (response.code==200) {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.SEARCH_INVOICE_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.SEARCH_INVOICE_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: invoiceConstants.SEARCH_INVOICE_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateInvoice(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: invoiceConstants.UPDATE_INVOICE_REQUEST,
            data: null
        }));
        invoiceServices.updateInvoice(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.UPDATE_INVOICE_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.UPDATE_INVOICE_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: invoiceConstants.UPDATE_INVOICE_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getNewInvoice(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: invoiceConstants.GET_NEW_INVOICE_REQUEST,
            data: null
        }));
        invoiceServices.getNewInvoice(data)
            .then(
               
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.GET_NEW_INVOICE_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.GET_NEW_INVOICE_FAILUER,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: invoiceConstants.GET_NEW_INVOICE_FAILUER,
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