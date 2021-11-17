import { invoiceConstants } from '../_constants';
import { invoiceServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const invoiceAction = {
    addInvoice,
    deleteInvoice,
    getInvoice,
    searchInvoice,
    updateInvoice
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
                            data: response.data
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
                            data: response.data
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

function getInvoice(id ) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: invoiceConstants.GET_INVOICE_REQUEST,
            data: null
        }));
        invoiceServices.getInvoice(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.GET_INVOICE_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: invoiceConstants.GET_INVOICE_FAILURE,
                            data: response
                        }));
                        // alert.error(response.message);
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
                            data: response.data
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
                            data: response.data
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