import { currencyConstants } from '../_constants';
import { currencyServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const currencyAction = {
    addCurrency,
    deleteCurrency,
    getCurrency,
    searchCurrency,
    updateCurrency
};

function addCurrency(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: currencyConstants.ADD_CURRENCY_REQUEST,
            data: null
        }));
        currencyServices.addCurrency(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: currencyConstants.ADD_CURRENCY_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: currencyConstants.ADD_CURRENCY_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: currencyConstants.ADD_CURRENCY_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function deleteCurrency(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: currencyConstants.DELETE_CURRENCY_REQUEST,
            data: null
        }));
        currencyServices.deleteCurrency(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: currencyConstants.DELETE_CURRENCY_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: currencyConstants.DELETE_CURRENCY_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: currencyConstants.DELETE_CURRENCY_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getCurrency(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: currencyConstants.GET_CURRENCY_REQUEST,
            data: null
        }));
        currencyServices.getCurrency(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: currencyConstants.GET_CURRENCY_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: currencyConstants.GET_CURRENCY_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: currencyConstants.GET_CURRENCY_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function searchCurrency(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: currencyConstants.SEARCH_CURRENCY_REQUEST,
            data: null
        }));
        currencyServices.searchCurrency(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: currencyConstants.SEARCH_CURRENCY_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: currencyConstants.SEARCH_CURRENCY_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: currencyConstants.SEARCH_CURRENCY_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateCurrency(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: currencyConstants.UPDATE_CURRENCY_REQUEST,
            data: null
        }));
        currencyServices.updateCurrency(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: currencyConstants.UPDATE_CURRENCY_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: currencyConstants.UPDATE_CURRENCY_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: currencyConstants.UPDATE_CURRENCY_FAILURE,
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