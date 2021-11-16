import { departmentConstants } from '../_constants';
import { departmentServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const departmentAction = {
    addDepartment,
    deleteDepartment,
    getDepartment,
    searchDepartment,
    updateDepartment
};

function addDepartment(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: departmentConstants.ADD_DEPARTMENT_REQUEST,
            data: null
        }));
        departmentServices.addDepartment(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: departmentConstants.ADD_DEPARTMENT_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: departmentConstants.ADD_DEPARTMENT_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: departmentConstants.ADD_DEPARTMENT_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function deleteDepartment(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: departmentConstants.DELETE_DEPARTMENT_REQUEST,
            data: null
        }));
        departmentServices.deleteDepartment(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: departmentConstants.DELETE_DEPARTMENT_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: departmentConstants.DELETE_DEPARTMENT_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: departmentConstants.DELETE_DEPARTMENT_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getDepartment(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: departmentConstants.GET_DEPARTMENT_REQUEST,
            data: null
        }));
        departmentServices.getDepartment(data)
            .then(
                response => {
                    if (response.code == 200) {
                        dispatch(dispatchFunction({
                            type: departmentConstants.GET_DEPARTMENT_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: departmentConstants.GET_DEPARTMENT_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: departmentConstants.GET_DEPARTMENT_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function searchDepartment(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: departmentConstants.SEARCH_DEPARTMENT_REQUEST,
            data: null
        }));
        departmentServices.searchDepartment(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: departmentConstants.SEARCH_DEPARTMENT_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: departmentConstants.SEARCH_DEPARTMENT_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: departmentConstants.SEARCH_DEPARTMENT_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function updateDepartment(id) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: departmentConstants.UPDATE_DEPARTMENT_REQUEST,
            data: null
        }));
        departmentServices.updateDepartment(id)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: departmentConstants.UPDATE_DEPARTMENT_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: departmentConstants.UPDATE_DEPARTMENT_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: departmentConstants.UPDATE_DEPARTMENT_FAILURE,
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