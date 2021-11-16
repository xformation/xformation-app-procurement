import { quotationConstants } from '../_constants';
import { quotationServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const quotationAction = {
    addQuotation,
    deleteQuotation,
    getQuotation,
    searchQuotation,
    updateQuotation
};

function addQuotation(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: quotationConstants.ADD_QUOTATION_REQUEST,
            data: null
        }));
        quotationServices.addQuotation(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: quotationConstants.ADD_QUOTATION_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: quotationConstants.ADD_QUOTATION_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: quotationConstants.ADD_QUOTATION_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function deleteQuotation(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: quotationConstants.DELETE_QUOTATION_REQUEST,
            data: null
        }));
        quotationServices.getQuotation(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: quotationConstants.DELETE_QUOTATION_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: quotationConstants.DELETE_QUOTATION_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: quotationConstants.DELETE_QUOTATION_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getQuotation(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: quotationConstants.GET_QUOTATION_REQUEST,
            data: null
        }));
        quotationServices.getQuotation(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: quotationConstants.GET_QUOTATION_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: quotationConstants.GET_QUOTATION_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: quotationConstants.GET_QUOTATION_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function searchQuotation(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: quotationConstants.SEARCH_QUOTATION_REQUEST,
            data: null
        }));
        quotationServices.searchQuotation(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: quotationConstants.SEARCH_QUOTATION_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: quotationConstants.SEARCH_QUOTATION_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: quotationConstants.SEARCH_QUOTATION_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateQuotation(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: quotationConstants.UPDATE_QUOTATION_REQUEST,
            data: null
        }));
        quotationServices.updateQuotation(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: quotationConstants.UPDATE_QUOTATION_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: quotationConstants.UPDATE_QUOTATION_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: quotationConstants.UPDATE_QUOTATION_FAILURE,
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