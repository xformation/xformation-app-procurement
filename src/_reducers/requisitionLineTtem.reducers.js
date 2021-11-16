import { requisitionLineTtemConstants, status } from '../_constants';

export function requisitionLineTtem(state = {}, action) {
    switch (action.type) {
        case requisitionLineTtemConstants.ADD_REQUISITION_LINE_ITEM_REQUEST:
            return {
                ...state,
                add_requisition_line_item_status: status.IN_PROGRESS,
                addRequisitionLineTtem: action.data
            };
        case requisitionLineTtemConstants.ADD_REQUISITION_LINE_ITEM_SUCCESS:
            return {
                ...state,
                add_requisition_line_item_status: status.SUCCESS,
                addRequisitionLineTtem: action.data
            };
        case requisitionLineTtemConstants.ADD_REQUISITION_LINE_ITEM_FAILURE:
            return {
                ...state,
                add_requisition_line_item_status: status.FAILURE,
                addRequisitionLineTtem: null
            };
        case requisitionLineTtemConstants.DELETE_REQUISITION_LINE_ITEM_REQUEST:
            return {
                ...state,
                delete_requisition_line_item_status: status.IN_PROGRESS,
                deleteRequisitionLineTtem: action.data
            };
        case requisitionLineTtemConstants.DELETE_REQUISITION_LINE_ITEM_SUCCESS:
            return {
                ...state,
                delete_requisition_line_item_status: status.SUCCESS,
                deleteRequisitionLineTtem: action.data
            };
        case requisitionLineTtemConstants.DELETE_REQUISITION_LINE_ITEM_FAILURE:
            return {
                ...state,
                delete_requisition_line_item_status: status.FAILURE,
                deleteRequisitionLineTtem: null
            };
        case requisitionLineTtemConstants.GET_REQUISITION_LINE_ITEM_REQUEST:
            return {
                ...state,
                get_requisition_line_item_status: status.IN_PROGRESS,
                getRequisitionLineTtem: action.data
            };
        case requisitionLineTtemConstants.GET_REQUISITION_LINE_ITEM_SUCCESS:
            return {
                ...state,
                get_requisition_line_item_status: status.SUCCESS,
                getRequisitionLineTtem: action.data
            };
        case requisitionLineTtemConstants.GET_REQUISITION_LINE_ITEM_FAILURE:
            return {
                ...state,
                get_requisition_line_item_status: status.FAILURE,
                getRequisitionLineTtem: null
            };
        case requisitionLineTtemConstants.SEARCH_REQUISITION_LINE_ITEM_REQUEST:
            return {
                ...state,
                search_requisition_line_item_status: status.IN_PROGRESS,
                searchRequisitionLineTtem: action.data
            };
        case requisitionLineTtemConstants.SEARCH_REQUISITION_LINE_ITEM_SUCCESS:
            return {
                ...state,
                search_requisition_line_item_status: status.SUCCESS,
                searchRequisitionLineTtem: action.data
            };
        case requisitionLineTtemConstants.SEARCH_REQUISITION_LINE_ITEM_FAILURE:
            return {
                ...state,
                search_requisition_line_item_status: status.FAILURE,
                searchRequisitionLineTtem: null
            };
        case requisitionLineTtemConstants.UPDATE_REQUISITION_LINE_ITEM_REQUEST:
            return {
                ...state,
                update_requisition_line_item_status: status.IN_PROGRESS,
                updateRequisitionLineTtem: action.data
            };
        case requisitionLineTtemConstants.UPDATE_REQUISITION_LINE_ITEM_SUCCESS:
            return {
                ...state,
                update_requisition_line_item_status: status.SUCCESS,
                updateRequisitionLineTtem: action.data
            };
        case requisitionLineTtemConstants.UPDATE_REQUISITION_LINE_ITEM_FAILURE:
            return {
                ...state,
                update_requisition_line_item_status: status.FAILURE,
                updateRequisitionLineTtem: null
            };
        default:
            return state;
    }
}
