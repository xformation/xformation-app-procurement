import { recievedrfpConstants, status } from '../_constants';

export function recievedrfp(state = {}, action) {
    switch (action.type) {
        case recievedrfpConstants.GET_RECIEVED_RFP_REQUEST:
            return {
                ...state,
                get_recieved_status: status.IN_PROGRESS,
                recieved_rfp_list: action.data
            };
        case recievedrfpConstants.GET_RECIEVED_RFP_SUCCESS:
            return {
                ...state,
                get_recieved_status: status.SUCCESS,
                recieved_rfp_list: action.data
            };
        case recievedrfpConstants.GET_RECIEVED_RFP_FAILURE:
            return {
                ...state,
                get_recieved_status: status.FAILURE,
                recieved_rfp_list: null
            };
        case recievedrfpConstants.GET_RECIEVED_RFP_DATA_REQUEST:
            return {
                ...state,
                recieved_rfp_status: status.IN_PROGRESS,
                recieved_rfp_data: action.data
            };
        case recievedrfpConstants.GET_RECIEVED_RFP_DATA_SUCCESS:
            return {
                ...state,
                recieved_rfp_status: status.SUCCESS,
                recieved_rfp_data: action.data
            };
        case recievedrfpConstants.GET_RECIEVED_RFP_DATA_FAILURE:
            return {
                ...state,
                recieved_rfp_status: status.FAILURE,
                recieved_rfp_data: null
            };
        case recievedrfpConstants.ADD_RECIEVED_RFP_REQUEST:
            return {
                ...state,
                add_recieved_rfp_status: status.IN_PROGRESS,
                recieved_rfp_res: action.data
            };
        case recievedrfpConstants.ADD_RECIEVED_RFP_SUCCESS:
            return {
                ...state,
                add_recieved_rfp_status: status.SUCCESS,
                recieved_rfp_res: action.data
            };
        case recievedrfpConstants.ADD_RECIEVED_RFP_FAILURE:
            return {
                ...state,
                add_recieved_rfp_status: status.FAILURE,
                recieved_rfp_res: null
            };
        case recievedrfpConstants.FETCH_RECIEVED_RFQ_REQUEST:
            return {
                ...state,
                fetch_recieved_rfq_status: status.IN_PROGRESS,
                recieved_rfq_list: action.data
            };
        case recievedrfpConstants.FETCH_RECIEVED_RFQ_SUCCESS:
            return {
                ...state,
                fetch_recieved_rfq_status: status.SUCCESS,
                recieved_rfq_list: action.data
            };
        case recievedrfpConstants.FETCH_RECIEVED_RFQ_FAILURE:
            return {
                ...state,
                fetch_recieved_rfq_status: status.FAILURE,
                recieved_rfq_list: null
            };
        case recievedrfpConstants.GET_RECIEVED_RFQ_DATA_REQUEST:
            return {
                ...state,
                recieved_rfq_status: status.IN_PROGRESS,
                recieved_rfq_data: action.data
            };
        case recievedrfpConstants.GET_RECIEVED_RFQ_DATA_SUCCESS:
            return {
                ...state,
                recieved_rfq_status: status.SUCCESS,
                recieved_rfq_data: action.data
            };
        case recievedrfpConstants.GET_RECIEVED_RFQ_DATA_FAILURE:
            return {
                ...state,
                recieved_rfq_status: status.FAILURE,
                recieved_rfq_data: null
            };
        case recievedrfpConstants.ADD_RECIEVED_RFQ_REQUEST:
            return {
                ...state,
                add_recieved_rfq_status: status.IN_PROGRESS,
                recieved_rfq_res: action.data
            };
        case recievedrfpConstants.ADD_RECIEVED_RFQ_SUCCESS:
            return {
                ...state,
                add_recieved_rfq_status: status.SUCCESS,
                recieved_rfq_res: action.data
            };
        case recievedrfpConstants.ADD_RECIEVED_RFQ_FAILURE:
            return {
                ...state,
                add_recieved_rfq_status: status.FAILURE,
                recieved_rfq_res: null
            };
        case recievedrfpConstants.GET_TRACK_RFP_REQUEST:
            return {
                ...state,
                track_frp_status: status.IN_PROGRESS,
                track_frp_data: action.data
            };
        case recievedrfpConstants.GET_TRACK_RFP_SUCCESS:
            return {
                ...state,
                track_frp_status: status.SUCCESS,
                track_frp_data: action.data
            };
        case recievedrfpConstants.GET_TRACK_RFP_FAILURE:
            return {
                ...state,
                track_frp_status: status.FAILURE,
                track_frp_data: null
            };
        default:
            return state;
    }
}
