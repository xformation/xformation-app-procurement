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
            case homeConstants.GET_DASHBOARD_REQUEST:
                return{
                    ...state,
                    get_dashboard_data_success: status.IN_PROGRESS,
                    getdashboarddata:action.data
                }
                case homeConstants.GET_DASHBOARD_SUCCESS:
                    return{
                        ...state,
                        get_dashboard_data_success: status.SUCCESS,
                        getdashboarddata:action.data
                    }
                    case homeConstants.GET_DASHBOARD_FAILURE:
                        return{
                            ...state,
                            get_dashboard_data_success: status.FAILURE,
                            getdashboarddata:null
                        }
        default:
            return state;
    }
}
