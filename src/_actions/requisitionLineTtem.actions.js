import { requisitionLineTtemConstants } from '../_constants';
import { requisitionLineTtemServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const requisitionLineTtemAction = {
    addRequisitionLineItem,
    deleteRequisitionLineItem,
    getRequisitionLineItem,
    searchRequisitionLineItem,
    updateRequisitionLineItem
};

function addRequisitionLineItem(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionLineTtemConstants.ADD_REQUISITION_LINE_ITEM_REQUEST,
            data: null
        }));
        requisitionLineTtemServices.addRequisitionLineItem(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: requisitionLineTtemConstants.ADD_REQUISITION_LINE_ITEM_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionLineTtemConstants.ADD_REQUISITION_LINE_ITEM_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionLineTtemConstants.ADD_REQUISITION_LINE_ITEM_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function deleteRequisitionLineItem(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionLineTtemConstants.DELETE_REQUISITION_LINE_ITEM_REQUEST,
            data: null
        }));
        requisitionLineTtemServices.getRequisitionLineItem(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: requisitionLineTtemConstants.DELETE_REQUISITION_LINE_ITEM_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionLineTtemConstants.DELETE_REQUISITION_LINE_ITEM_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionLineTtemConstants.DELETE_REQUISITION_LINE_ITEM_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getRequisitionLineItem(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionLineTtemConstants.GET_REQUISITION_LINE_ITEM_REQUEST,
            data: null
        }));
        requisitionLineTtemServices.getRequisitionLineItem(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: requisitionLineTtemConstants.GET_REQUISITION_LINE_ITEM_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionLineTtemConstants.GET_REQUISITION_LINE_ITEM_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionLineTtemConstants.GET_REQUISITION_LINE_ITEM_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function searchRequisitionLineItem(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionLineTtemConstants.SEARCH_REQUISITION_LINE_ITEM_REQUEST,
            data: null
        }));
        requisitionLineTtemServices.searchRequisitionLineItem(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: requisitionLineTtemConstants.SEARCH_REQUISITION_LINE_ITEM_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionLineTtemConstants.SEARCH_REQUISITION_LINE_ITEM_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionLineTtemConstants.SEARCH_REQUISITION_LINE_ITEM_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateRequisitionLineItem(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: requisitionLineTtemConstants.UPDATE_REQUISITION_LINE_ITEM_REQUEST,
            data: null
        }));
        requisitionLineTtemServices.updateRequisitionLineItem(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: requisitionLineTtemConstants.UPDATE_REQUISITION_LINE_ITEM_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: requisitionLineTtemConstants.UPDATE_REQUISITION_LINE_ITEM_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: requisitionLineTtemConstants.UPDATE_REQUISITION_LINE_ITEM_FAILURE,
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