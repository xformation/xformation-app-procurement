import { currencyConstants, status } from '../_constants';

export function currency(state = {}, action) {
    switch (action.type) {
        case currencyConstants.ADD_CURRENCY_REQUEST:
            return {
                ...state,
                add_currency_status: status.IN_PROGRESS,
                addCurrency: action.data
            };
        case currencyConstants.ADD_CURRENCY_SUCCESS:
            return {
                ...state,
                add_currency_status: status.SUCCESS,
                addCurrency: action.data
            };
        case currencyConstants.ADD_CURRENCY_FAILURE:
            return {
                ...state,
                add_currency_status: status.FAILURE,
                addCurrency: null
            };
        case currencyConstants.DELETE_CURRENCY_REQUEST:
            return {
                ...state,
                delete_currency_status: status.IN_PROGRESS,
                deleteCurrency: action.data
            };
        case currencyConstants.DELETE_CURRENCY_SUCCESS:
            return {
                ...state,
                delete_currency_status: status.SUCCESS,
                deleteCurrency: action.data
            };
        case currencyConstants.DELETE_CURRENCY_FAILURE:
            return {
                ...state,
                delete_currency_status: status.FAILURE,
                deleteCurrency: null
            };
        case currencyConstants.GET_CURRENCY_REQUEST:
            return {
                ...state,
                get_currency_status: status.IN_PROGRESS,
                getCurrency: action.data
            };
        case currencyConstants.GET_CURRENCY_SUCCESS:
            return {
                ...state,
                get_currency_status: status.SUCCESS,
                getCurrency: action.data
            };
        case currencyConstants.GET_CURRENCY_FAILURE:
            return {
                ...state,
                get_currency_status: status.FAILURE,
                getCurrency: null
            };
        case currencyConstants.SEARCH_CURRENCY_REQUEST:
            return {
                ...state,
                search_currency_status: status.IN_PROGRESS,
                searchCurrency: action.data
            };
        case currencyConstants.SEARCH_CURRENCY_SUCCESS:
            return {
                ...state,
                search_currency_status: status.SUCCESS,
                searchCurrency: action.data
            };
        case currencyConstants.SEARCH_CURRENCY_FAILURE:
            return {
                ...state,
                search_currency_status: status.FAILURE,
                searchCurrency: null
            };
        case currencyConstants.UPDATE_CURRENCY_REQUEST:
            return {
                ...state,
                update_currency_status: status.IN_PROGRESS,
                updateCurrency: action.data
            };
        case currencyConstants.UPDATE_CURRENCY_SUCCESS:
            return {
                ...state,
                update_currency_status: status.SUCCESS,
                updateCurrency: action.data
            };
        case currencyConstants.UPDATE_CURRENCY_FAILURE:
            return {
                ...state,
                update_currency_status: status.FAILURE,
                updateCurrency: null
            };
        default:
            return state;
    }
}