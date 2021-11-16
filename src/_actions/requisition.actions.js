import { requisitionConstants } from '../_constants';
import { requisitionServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const requistionAction = {
    addRequisition,
    getRequisition,
    getRequisitionEditData,
    editRequisition,
    getCurrency,
    deleteRequitionData,
    approveRequisition,
    getbuyerList,
    changeAddBuyerState,
    setRequisitionBuyers
};


function addRequisition(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionConstants.ADD_REQUISITION_REQUEST,
            data: null
        }));
        requisitionServices.addRequisition(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.ADD_REQUISITION_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.ADD_REQUISITION_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionConstants.ADD_REQUISITION_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getRequisition(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionConstants.GET_REQUISITION_REQUEST,
            data: null
        }));
        requisitionServices.getRequisition(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.GET_REQUISITION_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.GET_REQUISITION_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionConstants.GET_REQUISITION_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getRequisitionEditData(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionConstants.GET_EDIT_REQUISITION_REQUEST,
            data: null
        }));
        requisitionServices.getRequisitionEditData(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.GET_EDIT_REQUISITION_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.GET_EDIT_REQUISITION_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionConstants.GET_EDIT_REQUISITION_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function editRequisition(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionConstants.EDIT_REQUISITION_REQUEST,
            data: null
        }));
        requisitionServices.editRequisition(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.EDIT_REQUISITION_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.EDIT_REQUISITION_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionConstants.EDIT_REQUISITION_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getCurrency(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionConstants.GET_CURRENCY_REQUEST,
            data: null
        }));
        requisitionServices.getCurrency(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.GET_CURRENCY_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.GET_CURRENCY_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionConstants.GET_CURRENCY_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function deleteRequitionData(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionConstants.DELETE_REQUISITION_REQUEST,
            data: null
        }));
        requisitionServices.deleteRequisition(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.DELETE_REQUISITION_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.DELETE_REQUISITION_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionConstants.DELETE_REQUISITION_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function approveRequisition(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionConstants.APPROVE_REQUISITION_REQUEST,
            data: null
        }));
        requisitionServices.approveRequisition(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.APPROVE_REQUISITION_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.APPROVE_REQUISITION_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionConstants.APPROVE_REQUISITION_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getbuyerList(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionConstants.GET_BUYER_REQUEST,
            data: null
        }));
        requisitionServices.getbuyerList(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.GET_BUYER_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.GET_BUYER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionConstants.GET_BUYER_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function setRequisitionBuyers(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionConstants.SET_BUYER_REQUEST,
            data: null
        }));
        requisitionServices.setRequisitionBuyers(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.SET_BUYER_SUCCESS,
                            data: response.data
                        }));
                        alert.success(response.message);
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionConstants.SET_BUYER_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionConstants.SET_BUYER_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function changeAddBuyerState(buyerdata) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionConstants.SET_SELECTED_BUYER_STATE,
            data: buyerdata,
        }));
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