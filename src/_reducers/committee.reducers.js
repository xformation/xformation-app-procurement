import { committeeConstants, status } from '../_constants';

export function committee(state = {}, action) {
    switch (action.type) {
        case committeeConstants.ADD_COMMITTEE_REQUEST:
            return {
                ...state,
                add_committee_status: status.IN_PROGRESS,
                addCommittee: action.data
            };
        case committeeConstants.ADD_COMMITTEE_SUCCESS:
            return {
                ...state,
                add_committee_status: status.SUCCESS,
                addCommittee: action.data
            };
        case committeeConstants.ADD_COMMITTEE_FAILURE:
            return {
                ...state,
                add_committee_status: status.FAILURE,
                addCommittee: null
            };
        case committeeConstants.DELETE_COMMITTEE_REQUEST:
            return {
                ...state,
                delete_committee_status: status.IN_PROGRESS,
                deleteCommittee: action.data
            };
        case committeeConstants.DELETE_COMMITTEE_SUCCESS:
            return {
                ...state,
                delete_committee_status: status.SUCCESS,
                deleteCommittee: action.data
            };
        case committeeConstants.DELETE_COMMITTEE_FAILURE:
            return {
                ...state,
                delete_committee_status: status.FAILURE,
                deleteCommittee: null
            };
        case committeeConstants.GET_COMMITTEE_REQUEST:
            return {
                ...state,
                get_committee_status: status.IN_PROGRESS,
                getCommittee: action.data
            };
        case committeeConstants.GET_COMMITTEE_SUCCESS:
            return {
                ...state,
                get_committee_status: status.SUCCESS,
                getCommittee: action.data
            };
        case committeeConstants.GET_COMMITTEE_FAILURE:
            return {
                ...state,
                get_committee_status: status.FAILURE,
                getCommittee: null
            };
        case committeeConstants.SEARCH_COMMITTEE_REQUEST:
            return {
                ...state,
                search_committee_status: status.IN_PROGRESS,
                searchCommittee: action.data
            };
        case committeeConstants.SEARCH_COMMITTEE_SUCCESS:
            return {
                ...state,
                search_committee_status: status.SUCCESS,
                searchCommittee: action.data
            };
        case committeeConstants.SEARCH_COMMITTEE_FAILURE:
            return {
                ...state,
                search_committee_status: status.FAILURE,
                searchCommittee: null
            };
        case committeeConstants.UPDATE_COMMITTEE_REQUEST:
            return {
                ...state,
                update_committee_status: status.IN_PROGRESS,
                updateCommittee: action.data
            };
        case committeeConstants.UPDATE_COMMITTEE_SUCCESS:
            return {
                ...state,
                update_committee_status: status.SUCCESS,
                updateCommittee: action.data
            };
        case committeeConstants.UPDATE_COMMITTEE_FAILURE:
            return {
                ...state,
                update_committee_status: status.FAILURE,
                updateCommittee: null
            };
        default:
            return state;
    }
}