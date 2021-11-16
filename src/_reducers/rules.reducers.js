import { rulesConstants, status } from '../_constants';

export function rules(state = {}, action) {
    switch (action.type) {
        case rulesConstants.ADD_RULES_REQUEST:
            return {
                ...state,
                add_rules_status: status.IN_PROGRESS,
                addRules: action.data
            };
        case rulesConstants.ADD_RULES_SUCCESS:
            return {
                ...state,
                add_rules_status: status.SUCCESS,
                addRules: action.data
            };
        case rulesConstants.ADD_RULES_FAILURE:
            return {
                ...state,
                add_rules_status: status.FAILURE,
                addRules: null
            };
        case rulesConstants.DELETE_RULES_REQUEST:
            return {
                ...state,
                delete_rules_status: status.IN_PROGRESS,
                deleteRules: action.data
            };
        case rulesConstants.DELETE_RULES_SUCCESS:
            return {
                ...state,
                delete_rules_status: status.SUCCESS,
                deleteRules: action.data
            };
        case rulesConstants.DELETE_RULES_FAILURE:
            return {
                ...state,
                delete_rules_status: status.FAILURE,
                deleteRules: null
            };
        case rulesConstants.GET_RULES_REQUEST:
            return {
                ...state,
                get_rules_status: status.IN_PROGRESS,
                getRules: action.data
            };
        case rulesConstants.GET_RULES_SUCCESS:
            return {
                ...state,
                get_rules_status: status.SUCCESS,
                getRules: action.data
            };
        case rulesConstants.GET_RULES_FAILURE:
            return {
                ...state,
                get_rules_status: status.FAILURE,
                getRules: null
            };
        case rulesConstants.SEARCH_RULES_REQUEST:
            return {
                ...state,
                search_rules_status: status.IN_PROGRESS,
                searchRules: action.data
            };
        case rulesConstants.SEARCH_RULES_SUCCESS:
            return {
                ...state,
                search_rules_status: status.SUCCESS,
                searchRules: action.data
            };
        case rulesConstants.SEARCH_RULES_FAILURE:
            return {
                ...state,
                search_rules_status: status.FAILURE,
                searchRules: null
            };
        case rulesConstants.RULES_BY_NAME_REQUEST:
            return {
                ...state,
                rules_by_name_status: status.IN_PROGRESS,
                rulesByName: action.data
            };
        case rulesConstants.RULES_BY_NAME_SUCCESS:
            return {
                ...state,
                rules_by_name_status: status.SUCCESS,
                rulesByName: action.data
            };
        case rulesConstants.RULES_BY_NAME_FAILURE:
            return {
                ...state,
                rules_by_name_status: status.FAILURE,
                rulesByName: null
            };
        case rulesConstants.UPDATE_RULES_REQUEST:
            return {
                ...state,
                update_rules_status: status.IN_PROGRESS,
                updateRules: action.data
            };
        case rulesConstants.UPDATE_RULES_SUCCESS:
            return {
                ...state,
                update_crules_status: status.SUCCESS,
                updateRules: action.data
            };
        case rulesConstants.UPDATE_RULES_FAILURE:
            return {
                ...state,
                update_rules_status: status.FAILURE,
                updateRules: null
            };
        default:
            return state;
    }
}
