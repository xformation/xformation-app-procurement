import { buyerConstants } from '../_constants';
import { buyerServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const buyerAction = {
    addBuyer,
    deleteBuyer,
    getBuyer,
    searchBuyer,
    updateBuyer
};

function addBuyer(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: buyerConstants.ADD_BUYER_REQUEST,
            data: null
        }));
        buyerServices.addBuyer(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: buyerConstants.ADD_BUYER_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: buyerConstants.ADD_BUYER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: buyerConstants.ADD_BUYER_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function deleteBuyer(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: buyerConstants.DELETE_BUYER_REQUEST,
            data: null
        }));
        buyerServices.deleteBuyer(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: buyerConstants.DELETE_BUYER_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: buyerConstants.DELETE_BUYER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: buyerConstants.DELETE_BUYER_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getBuyer(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: buyerConstants.GET_BUYER_REQUEST,
            data: null
        }));
        buyerServices.getBuyer(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: buyerConstants.GET_BUYER_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: buyerConstants.GET_BUYER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: buyerConstants.GET_BUYER_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function searchBuyer(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: buyerConstants.SEARCH_BUYER_REQUEST,
            data: null
        }));
        buyerServices.searchBuyer(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: buyerConstants.SEARCH_BUYER_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: buyerConstants.SEARCH_BUYER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: buyerConstants.SEARCH_BUYER_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateBuyer(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: buyerConstants.UPDATE_BUYER_REQUEST,
            data: null
        }));
        buyerServices.updateBuyer(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: buyerConstants.UPDATE_BUYER_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: buyerConstants.UPDATE_BUYER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: buyerConstants.UPDATE_BUYER_FAILURE,
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