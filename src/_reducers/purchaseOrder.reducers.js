import { purchaseOrderConstants, status } from '../_constants';

export function purchaseOrder(state = {}, action) {
    switch (action.type) {
        case purchaseOrderConstants.ADD_PURCHASE_ORDER_REQUEST:
            return {
                ...state,
                add_purchase_order_status: status.IN_PROGRESS,
                addPurchaseOrder: action.data
            };
        case purchaseOrderConstants.ADD_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                add_purchase_order_status: status.SUCCESS,
                addPurchaseOrder: action.data
            };
        case purchaseOrderConstants.ADD_PURCHASE_ORDER_FAILURE:
            return {
                ...state,
                add_purchase_order_status: status.FAILURE,
                addPurchaseOrder: null
            };
        case purchaseOrderConstants.APPROVE_PURCHASE_ORDER_REQUEST:
            return {
                ...state,
                approve_purchase_order_status: status.IN_PROGRESS,
                approvePurchaseOrder: action.data
            };
        case purchaseOrderConstants.APPROVE_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                approve_purchase_order_status: status.SUCCESS,
                approvePurchaseOrder: action.data
            };
        case purchaseOrderConstants.APPROVE_PURCHASE_ORDER_FAILURE:
            return {
                ...state,
                approve_purchase_order_status: status.FAILURE,
                approvePurchaseOrder: null
            };
        case purchaseOrderConstants.DELETE_PURCHASE_ORDER_REQUEST:
            return {
                ...state,
                delete_purchase_order_status: status.IN_PROGRESS,
                deletePurchaseOrder: action.data
            };
        case purchaseOrderConstants.DELETE_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                delete_purchase_order_status: status.SUCCESS,
                deletePurchaseOrder: action.data
            };
        case purchaseOrderConstants.DELETE_PURCHASE_ORDER_FAILURE:
            return {
                ...state,
                delete_purchase_order_status: status.FAILURE,
                deletePurchaseOrder: null
            };
        case purchaseOrderConstants.GET_PURCHASE_ORDER_REQUEST:
            return {
                ...state,
                get_purchase_order_status: status.IN_PROGRESS,
                getPurchaseOrder: action.data
            };
        case purchaseOrderConstants.GET_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                get_purchase_order_status: status.SUCCESS,
                getPurchaseOrder: action.data
            };
        case purchaseOrderConstants.GET_PURCHASE_ORDER_FAILURE:
            return {
                ...state,
                get_purchase_order_status: status.FAILURE,
                getPurchaseOrder: null
            };
        case purchaseOrderConstants.SEARCH_PURCHASE_ORDER_REQUEST:
            return {
                ...state,
                search_purchase_order_status: status.IN_PROGRESS,
                searchPurchaseOrder: action.data
            };
        case purchaseOrderConstants.SEARCH_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                search_purchase_order_status: status.SUCCESS,
                searchPurchaseOrder: action.data
            };
        case purchaseOrderConstants.SEARCH_PURCHASE_ORDER_FAILURE:
            return {
                ...state,
                search_purchase_order_status: status.FAILURE,
                searchPurchaseOrder: null
            };
        case purchaseOrderConstants.UPDATE_PURCHASE_ORDER_REQUEST:
            return {
                ...state,
                update_purchase_order_status: status.IN_PROGRESS,
                updatePurchaseOrder: action.data
            };
        case purchaseOrderConstants.UPDATE_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                update_purchase_order_status: status.SUCCESS,
                updatePurchaseOrder: action.data
            };
        case purchaseOrderConstants.UPDATE_PURCHASE_ORDER_FAILURE:
            return {
                ...state,
                update_purchase_order_status: status.FAILURE,
                updatePurchaseOrder: null
            };
        default:
            return state;
    }
}
