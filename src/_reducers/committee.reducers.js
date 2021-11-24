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
        case committeeConstants.GET_COMMITTEETYPE_REQUEST:
            return {
                ...state,
                get_committee_type_status: status.IN_PROGRESS,
                getCommitteeType: action.data
            };
        case committeeConstants.GET_COMMITTEETYPE_SUCCESS:
            return {
                ...state,
                get_committee_type_status: status.SUCCESS,
                getCommitteeType: action.data
            };
        case committeeConstants.GET_COMMITTEETYPE_FAILURE:
            return {
                ...state,
                get_committee_type_status: status.FAILURE,
                getCommitteeType: null
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
        case committeeConstants.SET_SELECTED_COMITTEE_MEMBER:
            return {
                ...state,
                selected_committee_status: status.SUCCESS,
                selected_member_list: action.data
            };
        default:
            return state;
    }
}