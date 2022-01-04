import { buyerConstants, status } from '../_constants';

export function buyer(state = {}, action) {
    switch (action.type) {
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
