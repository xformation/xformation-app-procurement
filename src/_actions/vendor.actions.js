import { vendorConstants } from '../_constants';
import { vendorServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const vendorAction = {
    addVendor,
    deleteVendor,
    getVendor,
    searchVendor,
    updateVendor
};

function addVendor(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: vendorConstants.ADD_VENDOR_REQUEST,
            data: null
        }));
        vendorServices.addVendor(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: vendorConstants.ADD_VENDOR_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: vendorConstants.ADD_VENDOR_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: vendorConstants.ADD_VENDOR_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function deleteVendor(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: vendorConstants.DELETE_VENDOR_REQUEST,
            data: null
        }));
        vendorServices.deleteVendor(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: vendorConstants.DELETE_VENDOR_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: vendorConstants.DELETE_VENDOR_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: vendorConstants.DELETE_VENDOR_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getVendor(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: vendorConstants.GET_VENDOR_REQUEST,
            data: null
        }));
        vendorServices.getVendor(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: vendorConstants.GET_VENDOR_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: vendorConstants.GET_VENDOR_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: vendorConstants.GET_VENDOR_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function searchVendor(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: vendorConstants.SEARCH_VENDOR_REQUEST,
            data: null
        }));
        vendorServices.searchVendor(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: vendorConstants.SEARCH_VENDOR_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: vendorConstants.SEARCH_VENDOR_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: vendorConstants.SEARCH_VENDOR_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateVendor(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: vendorConstants.UPDATE_VENDOR_REQUEST,
            data: null
        }));
        vendorServices.updateVendor(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: vendorConstants.UPDATE_VENDOR_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: vendorConstants.UPDATE_VENDOR_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: vendorConstants.UPDATE_VENDOR_FAILURE,
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