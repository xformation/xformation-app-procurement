import approvePo from '../PostLogin/GeneratePo/approvePo';
import { purchaseOrderConstants, status } from '../_constants';

export function generatePurchaseOrder(state = {}, action) {
    switch (action.type) {
        case purchaseOrderConstants.GET_PURCHASE_ORDER_REQUEST:
            return {
                ...state,
                get_purchase_status: status.IN_PROGRESS,
                getpurchaseorder: action.data
            }
        case purchaseOrderConstants.GET_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                get_purchase_status: status.SUCCESS,
                getpurchaseorder: action.data
            }
        case purchaseOrderConstants.GET_PURCHASE_ORDER_FALIURE:
            return {
                ...state,
                get_purchase_status: status.FAILURE,
                getpurchaseorder: null
            }
        case purchaseOrderConstants.SEARCH_PURCHASE_ORDER_REQUEST:
            return {
                ...state,
                search_purchase_status: status.IN_PROGRESS,
                searchpurchaseorder: action.data
            }
        case purchaseOrderConstants.SEARCH_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                search_purchase_status: status.SUCCESS,
                searchpurchaseorder: action.data
            }
        case purchaseOrderConstants.SEARCH_PURCHASE_ORDER_FALIURE:
            return {
                ...state,
                search_purchase_status: status.IN_PROGRESS,
                searchpurchaseorder: null
            }
        case purchaseOrderConstants.ADD_PURCHASE_ORDER_REQUEST:
            return {
                ...state,
                add_purchase_order_status: status.IN_PROGRESS,
                addPurchaseOrder: action.data,
            }
        case purchaseOrderConstants.ADD_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                add_purchase_order_status: status.SUCCESS,
                addPurchaseOrder: action.data,
            }
        case purchaseOrderConstants.ADD_PURCHASE_ORDER_FALIURE:
            return {
                ...state,
                add_purchase_order_status: status.FAILURE,
                addPurchaseOrder: null,
            }
        case purchaseOrderConstants.SEARCH_APPROVE_PURCHASE_ORDER_REQUEST:
            return {
                ...state,
                get_approvepo_status: status.IN_PROGRESS,
                approvePo: action.data
            }
        case purchaseOrderConstants.SEARCH_APPROVE_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                get_approvepo_status: status.SUCCESS,
                approvePo: action.data
            }
        case purchaseOrderConstants.SEARCH_APPROVE_PURCHASE_ORDER_FAILURE:
            return {
                ...state,
                get_approvepo_status: status.FAILURE,
                approvePo: null
            }
        case purchaseOrderConstants.GET_APPROVE_PURCHASE_ORDER_REQUEST:
            return {
                ...state,
                search_approvepo_status: status.IN_PROGRESS,
                search_pprovepo: action.data
            }
        case purchaseOrderConstants.GET_APPROVE_PURCHASE_ORDER_SUCCESS:
            return {
                ...state,
                search_approvepo_status: status.SUCCESS,
                search_pprovepo: action.data
            }
        case purchaseOrderConstants.GET_APPROVE_PURCHASE_ORDER_FAILURE:
            return {
                ...state,
                search_approvepo_status: status.FAILURE,
                search_pprovepo: null
            }
        default:
            return state;
    }

}