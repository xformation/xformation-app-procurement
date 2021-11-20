import { buyerConstants, status } from '../_constants';

export function buyer(state = {}, action) {
    switch (action.type) {
        case buyerConstants.ADD_BUYER_REQUEST:
            return {
                ...state,
                add_buyer_status: status.IN_PROGRESS,
                addBuyer: action.data
            };
        case buyerConstants.ADD_BUYER_SUCCESS:
            return {
                ...state,
                add_buyer_status: status.SUCCESS,
                addBuyer: action.data
            };
        case buyerConstants.ADD_BUYER_FAILURE:
            return {
                ...state,
                add_buyer_status: status.FAILURE,
                addBuyer: null
            };
        case buyerConstants.DELETE_BUYER_REQUEST:
            return {
                ...state,
                delete_buyer_status: status.IN_PROGRESS,
                deleteBuyer: action.data
            };
        case buyerConstants.DELETE_BUYER_SUCCESS:
            return {
                ...state,
                delete_buyer_status: status.SUCCESS,
                deleteBuyer: action.data
            };
        case buyerConstants.DELETE_BUYER_FAILURE:
            return {
                ...state,
                delete_buyer_status: status.FAILURE,
                deleteBuyer: null
            };
        case buyerConstants.GET_BUYER_REQUEST:
            return {
                ...state,
                get_buyer_status: status.IN_PROGRESS,
                getBuyer: action.data
            };
        case buyerConstants.GET_BUYER_SUCCESS:
            return {
                ...state,
                get_buyer_status: status.SUCCESS,
                getBuyer: action.data
            };
        case buyerConstants.GET_BUYER_FAILURE:
            return {
                ...state,
                get_buyer_status: status.FAILURE,
                getBuyer: null
            };
        case buyerConstants.UPDATE_BUYER_REQUEST:
            return {
                ...state,
                update_buyer_status: status.IN_PROGRESS,
                updateBuyer: action.data
            };
        case buyerConstants.UPDATE_BUYER_SUCCESS:
            return {
                ...state,
                update_buyer_status: status.SUCCESS,
                updateBuyer: action.data
            };
        case buyerConstants.UPDATE_BUYER_FAILURE:
            return {
                ...state,
                update_buyer_status: status.FAILURE,
                updateBuyer: null
            };
        default:
            return state;
    }
}
