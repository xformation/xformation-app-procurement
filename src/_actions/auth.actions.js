import { authConstants } from '../_constants';
import { authServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const authActions = {
    login,
    //logOut
};

function login(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: authConstants.USER_LOGIN_REQUEST,
            data: null
        }));
        authServices.login(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: authConstants.USER_LOGIN_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: authConstants.USER_LOGIN_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: authConstants.USER_LOGIN_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}


// function logOut() {
//     commonFunctions.onLogout();
//     return dispatch => {
//         dispatch(dispatchFunction({
//             type: authConstants.USER_LOGOUT,
//             data: null
//         }));
//     };
// }

function dispatchFunction(data) {
    if(data.data && data.data.code === 401){
        commonFunctions.onLogout();
        return {
            type: authConstants.USER_LOGOUT,
            data: null
        };
    }
    return {
        type: data.type,
        data: data.data
    };
}