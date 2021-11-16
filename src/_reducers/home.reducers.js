import { homeConstants, status } from '../_constants';

export function home(state = {}, action) {
    switch (action.type) {
        case homeConstants.USERDATA_REQUEST:
            return {
                ...state,
                userdata_status: status.IN_PROGRESS,
                addUserdata: action.data
            };
        case homeConstants.USERDATA_SUCCESS:
            return {
                ...state,
                userdata_status: status.SUCCESS,
                addUserdata: action.data
            };
        case homeConstants.USERDATA_FAILURE:
            return {
                ...state,
                userdata_status: status.FAILURE,
                addUserdata: null
            };
        default:
            return state;
    }
}
