import { homeConstants } from '../_constants';
import { homeServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const homeAction = {
    Userdata
};

function Userdata(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: homeConstants.USERDATA_REQUEST,
            data: null
        }));
        homeServices.Userdata(data)
            .then(
                response => {
                    if (response.status) {
                        dispatch(dispatchFunction({
                            type: homeConstants.USERDATA_SUCCESS,
                            data: response.data
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: homeConstants.USERDATA_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: homeConstants.USERDATA_FAILURE,
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