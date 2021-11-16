import { vendorConstants, status } from '../_constants';

export function vendor(state = {}, action) {
    switch (action.type) {
        case vendorConstants.ADD_VENDOR_REQUEST:
            return {
                ...state,
                add_vendor_status: status.IN_PROGRESS,
                addVendor: action.data
            };
        case vendorConstants.ADD_VENDOR_SUCCESS:
            return {
                ...state,
                add_vendor_status: status.SUCCESS,
                addVendor: action.data
            };
        case vendorConstants.ADD_VENDOR_FAILURE:
            return {
                ...state,
                add_vendor_status: status.FAILURE,
                addVendor: null
            };
        case vendorConstants.DELETE_VENDOR_REQUEST:
            return {
                ...state,
                delete_vendor_status: status.IN_PROGRESS,
                deleteVendor: action.data
            };
        case vendorConstants.DELETE_VENDOR_SUCCESS:
            return {
                ...state,
                delete_vendor_status: status.SUCCESS,
                deleteVendor: action.data
            };
        case vendorConstants.DELETE_VENDOR_FAILURE:
            return {
                ...state,
                delete_vendor_status: status.FAILURE,
                deleteVendor: null
            };
        case vendorConstants.GET_VENDOR_REQUEST:
            return {
                ...state,
                get_vendor_status: status.IN_PROGRESS,
                getVendor: action.data
            };
        case vendorConstants.GET_VENDOR_SUCCESS:
            return {
                ...state,
                get_vendor_status: status.SUCCESS,
                getVendor: action.data
            };
        case vendorConstants.GET_VENDOR_FAILURE:
            return {
                ...state,
                get_vendor_status: status.FAILURE,
                getVendor: null
            };
        case vendorConstants.SEARCH_VENDOR_REQUEST:
            return {
                ...state,
                search_vendor_status: status.IN_PROGRESS,
                searchVendor: action.data
            };
        case vendorConstants.SEARCH_VENDOR_SUCCESS:
            return {
                ...state,
                search_vendor_status: status.SUCCESS,
                searchVendor: action.data
            };
        case vendorConstants.SEARCH_VENDOR_FAILURE:
            return {
                ...state,
                search_vendor_status: status.FAILURE,
                searchVendor: null
            };
        case vendorConstants.UPDATE_VENDOR_REQUEST:
            return {
                ...state,
                update_vendor_status: status.IN_PROGRESS,
                updateVendor: action.data
            };
        case vendorConstants.UPDATE_VENDOR_SUCCESS:
            return {
                ...state,
                update_vendor_status: status.SUCCESS,
                updateVendor: action.data
            };
        case vendorConstants.UPDATE_VENDOR_FAILURE:
            return {
                ...state,
                update_vendor_status: status.FAILURE,
                updateVendor: null
            };
        default:
            return state;
    }
}
