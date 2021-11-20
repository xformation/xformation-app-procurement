import { contactConstants } from '../_constants';
import { contactServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const contactAction = {
    addContact,
    deleteContact,
    fetchContactList,
    getEditContactData,
    updateContact
};

function fetchContactList() {
    return dispatch => {
        dispatch(dispatchFunction({
            type: contactConstants.GET_CONTACT_REQUEST,
            data: null
        }));
        contactServices.fetchContactList()
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: contactConstants.GET_CONTACT_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: contactConstants.GET_CONTACT_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: contactConstants.GET_CONTACT_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function addContact(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: contactConstants.ADD_CONTACT_REQUEST,
            data: null
        }));
        contactServices.addContact(data)
            .then(
                response => {
                    console.log(response)
                    if (response.code==200) {
                        dispatch(dispatchFunction({
                            type: contactConstants.ADD_CONTACT_SUCCESS,
                            data: response.object
                        }));
                        alert.success(response.message);
                    } else {
                        dispatch(dispatchFunction({
                            type: contactConstants.ADD_CONTACT_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: contactConstants.ADD_CONTACT_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function deleteContact(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: contactConstants.DELETE_CONTACT_REQUEST,
            data: null
        }));
        contactServices.deleteContact(id)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: contactConstants.DELETE_CONTACT_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: contactConstants.DELETE_CONTACT_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: contactConstants.DELETE_CONTACT_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getEditContactData(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: contactConstants.GET_EDIT_CONTACT_REQUEST,
            data: null
        }));
        contactServices.getEditContactData(data)
            .then(
                response => {
                    console.log(response)
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: contactConstants.GET_EDIT_CONTACT_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: contactConstants.GET_EDIT_CONTACT_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: contactConstants.GET_EDIT_CONTACT_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateContact(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: contactConstants.UPDATE_CONTACT_REQUEST,
            data: null
        }));
        contactServices.updateContact(data)
            .then(
                response => {
                    console.log(response)
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: contactConstants.UPDATE_CONTACT_SUCCESS,
                            data: response.object
                        }));
                        alert.success(response.message);
                    } else {
                        dispatch(dispatchFunction({
                            type: contactConstants.UPDATE_CONTACT_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: contactConstants.UPDATE_CONTACT_FAILURE,
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