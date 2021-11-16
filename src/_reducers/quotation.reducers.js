import { quotationConstants, status } from '../_constants';

export function quotation(state = {}, action) {
    switch (action.type) {
        case quotationConstants.ADD_QUOTATION_REQUEST:
            return {
                ...state,
                add_quotation_status: status.IN_PROGRESS,
                addQuotation: action.data
            };
        case quotationConstants.ADD_QUOTATION_SUCCESS:
            return {
                ...state,
                add_quotation_status: status.SUCCESS,
                addQuotation: action.data
            };
        case quotationConstants.ADD_QUOTATION_FAILURE:
            return {
                ...state,
                add_quotation_status: status.FAILURE,
                addQuotation: null
            };
        case quotationConstants.DELETE_QUOTATION_REQUEST:
            return {
                ...state,
                delete_quotation_status: status.IN_PROGRESS,
                deleteQuotation: action.data
            };
        case quotationConstants.DELETE_QUOTATION_SUCCESS:
            return {
                ...state,
                delete_quotation_status: status.SUCCESS,
                deleteQuotation: action.data
            };
        case quotationConstants.DELETE_QUOTATION_FAILURE:
            return {
                ...state,
                delete_quotation_status: status.FAILURE,
                deleteQuotation: null
            };
        case quotationConstants.GET_QUOTATION_REQUEST:
            return {
                ...state,
                get_quotation_status: status.IN_PROGRESS,
                getQuotation: action.data
            };
        case quotationConstants.GET_QUOTATION_SUCCESS:
            return {
                ...state,
                get_quotation_status: status.SUCCESS,
                getQuotation: action.data
            };
        case quotationConstants.GET_QUOTATION_FAILURE:
            return {
                ...state,
                get_quotation_status: status.FAILURE,
                getQuotation: null
            };
        case quotationConstants.SEARCH_QUOTATION_REQUEST:
            return {
                ...state,
                search_quotation_status: status.IN_PROGRESS,
                searchQuotation: action.data
            };
        case quotationConstants.SEARCH_QUOTATION_SUCCESS:
            return {
                ...state,
                search_quotation_status: status.SUCCESS,
                searchQuotation: action.data
            };
        case quotationConstants.SEARCH_QUOTATION_FAILURE:
            return {
                ...state,
                search_quotation_status: status.FAILURE,
                searchQuotation: null
            };
        case quotationConstants.UPDATE_QUOTATION_REQUEST:
            return {
                ...state,
                update_quotation_status: status.IN_PROGRESS,
                updateQuotation: action.data
            };
        case quotationConstants.UPDATE_QUOTATION_SUCCESS:
            return {
                ...state,
                update_quotation_status: status.SUCCESS,
                updateQuotation: action.data
            };
        case quotationConstants.UPDATE_QUOTATION_FAILURE:
            return {
                ...state,
                update_quotation_status: status.FAILURE,
                updateQuotation: null
            };
        default:
            return state;
    }
}
