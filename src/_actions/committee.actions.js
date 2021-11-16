import { committeeConstants } from '../_constants';
import { committeeServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const committeeAction = {
    addCommittee,
    deleteCommittee,
    getCommittee,
    searchCommittee,
    updateCommittee
};

function addCommittee(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: committeeConstants.ADD_COMMITTEE_REQUEST,
            data: null
        }));
        committeeServices.addCommittee(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: committeeConstants.ADD_COMMITTEE_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: committeeConstants.ADD_COMMITTEE_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: committeeConstants.ADD_COMMITTEE_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function deleteCommittee(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: committeeConstants.DELETE_COMMITTEE_REQUEST,
            data: null
        }));
        committeeServices.deleteCommittee(id)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: committeeConstants.DELETE_COMMITTEE_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: committeeConstants.DELETE_COMMITTEE_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: committeeConstants.DELETE_COMMITTEE_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getCommittee(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: committeeConstants.GET_COMMITTEE_REQUEST,
            data: null
        }));
        committeeServices.getCommittee(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: committeeConstants.GET_COMMITTEE_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: committeeConstants.GET_COMMITTEE_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: committeeConstants.GET_COMMITTEE_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function searchCommittee(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: committeeConstants.SEARCH_COMMITTEE_REQUEST,
            data: null
        }));
        committeeServices.searchCommittee(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: committeeConstants.SEARCH_COMMITTEE_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: committeeConstants.SEARCH_COMMITTEE_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: committeeConstants.SEARCH_COMMITTEE_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateCommittee(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: committeeConstants.UPDATE_COMMITTEE_REQUEST,
            data: null
        }));
        committeeServices.updateCommittee(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: committeeConstants.UPDATE_COMMITTEE_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: committeeConstants.UPDATE_COMMITTEE_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: committeeConstants.UPDATE_COMMITTEE_FAILURE,
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