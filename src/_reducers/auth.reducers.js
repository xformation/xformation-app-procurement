import { authConstants, status } from '../_constants';
// import { localStorageEnc } from '../_utilities';

let user = localStorage.getItem('userData');
let initialState = {};
// if (user) {
//     user = JSON.parse(user);
//     initialState = {
//         user_login_status: status.SUCCESS,
//         user
//     };
// }

export function auth(state = initialState, action) {
    switch (action.type) {
        case authConstants.USER_LOGOUT:
            return {
                ...state,
                user: null
            };
        case authConstants.USER_LOGIN_REQUEST:
            return {
                ...state,
                user_login_status: status.IN_PROGRESS,
                user: action.data
            };
        case authConstants.USER_LOGIN_SUCCESS:
            return {
                ...state,
                user_login_status: status.SUCCESS,
                user: action.data
            };
        case authConstants.USER_LOGIN_FAILURE:
            return {
                ...state,
                user_login_status: status.FAILURE,
                user: null
            };
        default:
            return state;
    }
}