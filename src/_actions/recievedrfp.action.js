
import { recievedrfpConstants } from '../_constants';
import { recievedrfpServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const recievedrfpAction = {
    searchRecievedRFP,
    getRecieveRFP,
    addRecieveRFP,
    searchRecievedRFQ,
    getRecieveRFQ,
    addRecieveRFQ,
};

function searchRecievedRFP(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: recievedrfpConstants.GET_RECIEVED_RFP_REQUEST,
            data: null
        }));
        recievedrfpServices.searchRecievedRFP(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: recievedrfpConstants.GET_RECIEVED_RFP_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: recievedrfpConstants.GET_RECIEVED_RFP_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: recievedrfpConstants.GET_RECIEVED_RFP_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getRecieveRFP(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: recievedrfpConstants.GET_RECIEVED_RFP_DATA_REQUEST,
            data: null
        }));
        recievedrfpServices.getRecieveRFP(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: recievedrfpConstants.GET_RECIEVED_RFP_DATA_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: recievedrfpConstants.GET_RECIEVED_RFP_DATA_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: recievedrfpConstants.GET_RECIEVED_RFP_DATA_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function addRecieveRFP(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: recievedrfpConstants.ADD_RECIEVED_RFP_REQUEST,
            data: null
        }));
        recievedrfpServices.addRecieveRFP(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: recievedrfpConstants.ADD_RECIEVED_RFP_SUCCESS,
                            data: response.object
                        }));
                        alert.success(response.message)
                    } else {
                        dispatch(dispatchFunction({
                            type: recievedrfpConstants.ADD_RECIEVED_RFP_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: recievedrfpConstants.ADD_RECIEVED_RFP_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function searchRecievedRFQ(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: recievedrfpConstants.FETCH_RECIEVED_RFQ_REQUEST,
            data: null
        }));
        recievedrfpServices.searchRecievedRFQ()
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: recievedrfpConstants.FETCH_RECIEVED_RFQ_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: recievedrfpConstants.FETCH_RECIEVED_RFQ_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: recievedrfpConstants.FETCH_RECIEVED_RFQ_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getRecieveRFQ(data){
    return dispatch => {
        dispatch(dispatchFunction({
            type: recievedrfpConstants.GET_RECIEVED_RFQ_DATA_REQUEST,
            data: null
        }));
        recievedrfpServices.getRecieveRFQ(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: recievedrfpConstants.GET_RECIEVED_RFQ_DATA_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: recievedrfpConstants.GET_RECIEVED_RFQ_DATA_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: recievedrfpConstants.GET_RECIEVED_RFQ_DATA_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function addRecieveRFQ(data){
    return dispatch => {
        dispatch(dispatchFunction({
            type: recievedrfpConstants.ADD_RECIEVED_RFQ_REQUEST,
            data: null
        }));
        recievedrfpServices.addRecieveRFQ(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: recievedrfpConstants.ADD_RECIEVED_RFQ_SUCCESS,
                            data: response.object
                        }));
                        alert.success(response.message)
                    } else {
                        dispatch(dispatchFunction({
                            type: recievedrfpConstants.ADD_RECIEVED_RFQ_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: recievedrfpConstants.ADD_RECIEVED_RFQ_FAILURE,
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