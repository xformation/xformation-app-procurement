import { requisitionConstants, status } from '../_constants';

export function requisition(state = {}, action) {
    switch (action.type) {
        case requisitionConstants.ADD_REQUISITION_REQUEST:
            return {
                ...state,
                add_requisition_status: status.IN_PROGRESS,
            };
        case requisitionConstants.ADD_REQUISITION_SUCCESS:
            return {
                ...state,
                add_requisition_status: status.SUCCESS,
                addRequisition: action.data
            };
        case requisitionConstants.ADD_REQUISITION_FAILURE:
            return {
                ...state,
                add_requisition_status: status.FAILURE,
            };
        case requisitionConstants.GET_REQUISITION_REQUEST:
            return {
                ...state,
                get_requisition_status: status.IN_PROGRESS,
            };
        case requisitionConstants.GET_REQUISITION_SUCCESS:
            return {
                ...state,
                get_requisition_status: status.SUCCESS,
                getRequisitionlist: action.data
            };
        case requisitionConstants.GET_REQUISITION_FAILURE:
            return {
                ...state,
                get_requisition_status: status.FAILURE,
            };
        case requisitionConstants.GET_EDIT_REQUISITION_REQUEST:
            return {
                ...state,
                get_edit_requisition_status: status.IN_PROGRESS,
            };
        case requisitionConstants.GET_EDIT_REQUISITION_SUCCESS:
            return {
                ...state,
                get_edit_requisition_status: status.SUCCESS,
                editRequisitiondata: action.data
            };
        case requisitionConstants.GET_EDIT_REQUISITION_FAILURE:
            return {
                ...state,
                get_edit_requisition_status: status.FAILURE,
            };
        case requisitionConstants.EDIT_REQUISITION_REQUEST:
            return {
                ...state,
                update_requisition_status: status.IN_PROGRESS,
            };
        case requisitionConstants.EDIT_REQUISITION_SUCCESS:
            return {
                ...state,
                update_requisition_status: status.SUCCESS,
                updateRequisition: action.data
            };
        case requisitionConstants.EDIT_REQUISITION_FAILURE:
            return {
                ...state,
                update_requisition_status: status.FAILURE,
            };
        case requisitionConstants.GET_CURRENCY_REQUEST:
            return {
                ...state,
                get_currency_status: status.IN_PROGRESS,
            };
        case requisitionConstants.GET_CURRENCY_SUCCESS:
            return {
                ...state,
                get_currency_status: status.SUCCESS,
                currencylistdata: action.data
            };
        case requisitionConstants.GET_CURRENCY_FAILURE:
            return {
                ...state,
                get_currency_status: status.FAILURE,
            };
        case requisitionConstants.DELETE_REQUISITION_REQUEST:
            return {
                ...state,
                delete_requisition_status: status.IN_PROGRESS,
            };
        case requisitionConstants.DELETE_REQUISITION_SUCCESS:
            return {
                ...state,
                delete_requisition_status: status.SUCCESS,
                deleteRequisition: action.data
            };
        case requisitionConstants.DELETE_REQUISITION_FAILURE:
            return {
                ...state,
                delete_requisition_status: status.FAILURE,
            };
        case requisitionConstants.APPROVE_REQUISITION_REQUEST:
            return {
                ...state,
                approve_requisition_status: status.IN_PROGRESS,
            };
        case requisitionConstants.APPROVE_REQUISITION_SUCCESS:
            return {
                ...state,
                approve_requisition_status: status.SUCCESS,
                approveRequisition: action.data
            };
        case requisitionConstants.APPROVE_REQUISITION_FAILURE:
            return {
                ...state,
                approve_requisition_status: status.FAILURE,
            };
        case requisitionConstants.GET_BUYER_REQUEST:
            return {
                ...state,
                get_buyer_status: status.IN_PROGRESS,
            };
        case requisitionConstants.GET_BUYER_SUCCESS:
            return {
                ...state,
                get_buyer_status: status.SUCCESS,
                get_buyer_list: action.data
            };
        case requisitionConstants.GET_BUYER_FAILURE:
            return {
                ...state,
                get_buyer_status: status.FAILURE,
            };
        case requisitionConstants.SET_BUYER_REQUEST:
            return {
                ...state,
                set_buyer_status: status.IN_PROGRESS,
            };
        case requisitionConstants.SET_BUYER_SUCCESS:
            return {
                ...state,
                set_buyer_status: status.SUCCESS,
                set_buyer_res: action.data
            };
        case requisitionConstants.SET_BUYER_FAILURE:
            return {
                ...state,
                set_buyer_status: status.FAILURE,
            };
        case requisitionConstants.SET_SELECTED_BUYER_STATE:
            return {
                ...state,
                selected_buyer_status: status.SUCCESS,
                selected_buyer_list: action.data
            };
        default:
            return state;
    }
}
