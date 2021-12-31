import { reportConstants, status } from "../_constants";


export function reports(state = {}, action) {
    switch (action.type) {
        case reportConstants.GET_REPORTS_REQUEST:
            return {
                ...state,
                get_reports_status: status.IN_PROGRESS,
                get_reports_data: action.data,
            };
        case reportConstants.GET_REPORTS_SUCCESS:
            return {
                ...state,
                get_reports_status: status.SUCCESS,
                get_reports_data: action.data,
            };
        case reportConstants.GET_REPORTS_FAILURE:
            return {
                ...state,
                get_reports_status: status.FAILURE,
                get_reports_data: null
            }
        default:
            return state;
    }
}