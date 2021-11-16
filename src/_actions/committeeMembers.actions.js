import { committeeMembersConstants } from '../_constants';
import { committeeMembersServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const committeeMembersAction = {
    addCommitteeMembers,
    getCommitteeMembers,
    searchCommitteeMembers,
    updateCommitteeMembers
};

function addCommitteeMembers(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: committeeMembersConstants.ADD_COMMITTEE_MEMBERS_REQUEST,
            data: null
        }));
        committeeMembersServices.addCommitteeMembers(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: committeeMembersConstants.ADD_COMMITTEE_MEMBERS_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: committeeMembersConstants.ADD_COMMITTEE_MEMBERS_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: committeeMembersConstants.ADD_COMMITTEE_MEMBERS_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getCommitteeMembers(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: committeeMembersConstants.GET_COMMITTEE_MEMBERS_REQUEST,
            data: null
        }));
        committeeMembersServices.getCommitteeMembers(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: committeeMembersConstants.GET_COMMITTEE_MEMBERS_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: committeeMembersConstants.GET_COMMITTEE_MEMBERS_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: committeeMembersConstants.GET_COMMITTEE_MEMBERS_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function searchCommitteeMembers(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: committeeMembersConstants.SEARCH_COMMITTEE_MEMBERS_REQUEST,
            data: null
        }));
        committeeMembersServices.searchCommitteeMembers(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: committeeMembersConstants.SEARCH_COMMITTEE_MEMBERS_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: committeeMembersConstants.SEARCH_COMMITTEE_MEMBERS_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: committeeMembersConstants.SEARCH_COMMITTEE_MEMBERS_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateCommitteeMembers(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: committeeMembersConstants.UPDATE_COMMITTEE_MEMBERS_REQUEST,
            data: null
        }));
        committeeMembersServices.updateCommitteeMembers(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: committeeMembersConstants.UPDATE_COMMITTEE_MEMBERS_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: committeeMembersConstants.UPDATE_COMMITTEE_MEMBERS_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: committeeMembersConstants.UPDATE_COMMITTEE_MEMBERS_FAILURE,
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