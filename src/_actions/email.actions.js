import { emailConstants } from '../_constants';
import { emailServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const emailActions = {
    recentcommunication,
    searchallemails,
    sendEmail,
    getEmailDetail,
    deleteEmail

};

function recentcommunication(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: emailConstants.RECENT_COMUNICATION_REQUEST,
            data: null
        }));
        emailServices.recentCommunication(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: emailConstants.RECENT_COMUNICATION_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: emailConstants.RECENT_COMUNICATION_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: emailConstants.RECENT_COMUNICATION_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };

}

function searchallemails(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: emailConstants.SEARCH_ALL_EMAILS_REQUEST,
            data: null
        }));
        emailServices.searchallemails(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: emailConstants.SEARCH_ALL_EMAILS_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: emailConstants.SEARCH_ALL_EMAILS_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: emailConstants.SEARCH_ALL_EMAILS_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function sendEmail(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: emailConstants.SEND_EMAILS_REQUEST,
            data: null
        }));
        emailServices.sendEmail(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: emailConstants.SEND_EMAILS_SUCCESS,
                            data: response.object
                        }));
                        alert.success(response.message);
                    } else {
                        dispatch(dispatchFunction({
                            type: emailConstants.SEND_EMAILS_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: emailConstants.SEND_EMAILS_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getEmailDetail(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: emailConstants.GET_EMAIL_DETAIL_REQUEST,
            data: null
        }));
        emailServices.getEmailDetail(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: emailConstants.GET_EMAIL_DETAIL_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: emailConstants.GET_EMAIL_DETAIL_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: emailConstants.GET_EMAIL_DETAIL_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function deleteEmail(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: emailConstants.DELETE_EMAIL_REQUEST,
            data: null
        }));
        emailServices.deleteEmail(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: emailConstants.DELETE_EMAIL_SUCCESS,
                            data: response.object
                        }));
                        alert.success(response.message);
                    } else {
                        dispatch(dispatchFunction({
                            type: emailConstants.DELETE_EMAIL_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: emailConstants.DELETE_EMAIL_FAILURE,
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