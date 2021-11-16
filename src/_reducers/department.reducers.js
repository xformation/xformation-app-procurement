import { departmentConstants, status } from '../_constants';

export function department(state = {}, action) {
    switch (action.type) {
        case departmentConstants.ADD_DEPARTMENT_REQUEST:
            return {
                ...state,
                add_department_status: status.IN_PROGRESS,
                addDepartment: action.data
            };
        case departmentConstants.ADD_DEPARTMENT_SUCCESS:
            return {
                ...state,
                add_department_status: status.SUCCESS,
                addDepartment: action.data
            };
        case departmentConstants.ADD_DEPARTMENT_FAILURE:
            return {
                ...state,
                add_department_status: status.FAILURE,
                addDepartment: null
            };
        case departmentConstants.DELETE_DEPARTMENT_REQUEST:
            return {
                ...state,
                delete_department_status: status.IN_PROGRESS,
                deleteDepartment: action.data
            };
        case departmentConstants.DELETE_DEPARTMENT_SUCCESS:
            return {
                ...state,
                delete_department_status: status.SUCCESS,
                deleteDepartment: action.data
            };
        case departmentConstants.DELETE_DEPARTMENT_FAILURE:
            return {
                ...state,
                delete_department_status: status.FAILURE,
                deleteDepartment: null
            };
        case departmentConstants.GET_DEPARTMENT_REQUEST:
            return {
                ...state,
                get_department_status: status.IN_PROGRESS,
            };
        case departmentConstants.GET_DEPARTMENT_SUCCESS:
            return {
                ...state,
                get_department_status: status.SUCCESS,
                departmentList: action.data
            };
        case departmentConstants.GET_DEPARTMENT_FAILURE:
            return {
                ...state,
                get_department_status: status.FAILURE,
            };
        case departmentConstants.SEARCH_DEPARTMENT_REQUEST:
            return {
                ...state,
                search_department_status: status.IN_PROGRESS,
                searchDepartment: action.data
            };
        case departmentConstants.SEARCH_DEPARTMENT_SUCCESS:
            return {
                ...state,
                search_department_status: status.SUCCESS,
                searchDepartment: action.data
            };
        case departmentConstants.SEARCH_DEPARTMENT_FAILURE:
            return {
                ...state,
                search_department_status: status.FAILURE,
                searchDepartment: null
            };
        case departmentConstants.UPDATE_DEPARTMENT_REQUEST:
            return {
                ...state,
                update_department_status: status.IN_PROGRESS,
                updateDepartment: action.data
            };
        case departmentConstants.UPDATE_DEPARTMENT_SUCCESS:
            return {
                ...state,
                update_cdepartment_status: status.SUCCESS,
                updateDepartment: action.data
            };
        case departmentConstants.UPDATE_DEPARTMENT_FAILURE:
            return {
                ...state,
                update_department_status: status.FAILURE,
                updateDepartment: null
            };
        default:
            return state;
    }
}
