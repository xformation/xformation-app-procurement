import { mailsConstants } from '../_constants';
import { mailsServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const mailsAction = {
    draftMail,
    getAllMail,
    getSentEmail,
    latestEmail
};

function draftMail(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: mailsConstants.DRAFT_MAIL_REQUEST,
            data: null
        }));
        mailsServices.draftMail(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: mailsConstants.DRAFT_MAIL_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: mailsConstants.DRAFT_MAIL_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: mailsConstants.DRAFT_MAIL_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getAllMail(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: mailsConstants.RECEIVE_EMAIL_REQUEST,
            data: null
        }));
        mailsServices.getAllMail(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: mailsConstants.RECEIVE_EMAIL_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: mailsConstants.RECEIVE_EMAIL_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: mailsConstants.RECEIVE_EMAIL_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getSentEmail(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: mailsConstants.SEND_EMAIL_REQUEST,
            data: null
        }));
        mailsServices.getSentEmail(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: mailsConstants.SEND_EMAIL_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: mailsConstants.SEND_EMAIL_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: mailsConstants.SEND_EMAIL_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function latestEmail(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: mailsConstants.LATEST_EMAIL_REQUEST,
            data: null
        }));
        mailsServices.latestEmail(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: mailsConstants.LATEST_EMAIL_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: mailsConstants.LATEST_EMAIL_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: mailsConstants.LATEST_EMAIL_FAILURE,
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