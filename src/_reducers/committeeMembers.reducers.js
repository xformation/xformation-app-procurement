import { committeeMembersConstants, status } from '../_constants';

export function committeeMembers(state = {}, action) {
    switch (action.type) {
        case committeeMembersConstants.ADD_COMMITTEE_MEMBERS_REQUEST:
            return {
                ...state,
                add_committee_members_status: status.IN_PROGRESS,
                addCommitteeMembers: action.data
            };
        case committeeMembersConstants.ADD_COMMITTEE_MEMBERS_SUCCESS:
            return {
                ...state,
                add_committee_members_status: status.SUCCESS,
                addCommitteeMembers: action.data
            };
        case committeeMembersConstants.ADD_COMMITTEE_MEMBERS_FAILURE:
            return {
                ...state,
                add_committee_members_status: status.FAILURE,
                addCommitteeMembers: null
            };
        case committeeMembersConstants.GET_COMMITTEE_MEMBERS_REQUEST:
            return {
                ...state,
                get_committee_members_status: status.IN_PROGRESS,
                getCommitteeMembers: action.data
            };
        case committeeMembersConstants.GET_COMMITTEE_MEMBERS_SUCCESS:
            return {
                ...state,
                get_committee_members_status: status.SUCCESS,
                getCommitteeMembers: action.data
            };
        case committeeMembersConstants.GET_COMMITTEE_MEMBERS_FAILURE:
            return {
                ...state,
                get_committee_members_status: status.FAILURE,
                getCommitteeMembers: null
            };
        case committeeMembersConstants.SEARCH_COMMITTEE_MEMBERS_REQUEST:
            return {
                ...state,
                search_committee_members_status: status.IN_PROGRESS,
                searchCommitteeMembers: action.data
            };
        case committeeMembersConstants.SEARCH_COMMITTEE_MEMBERS_SUCCESS:
            return {
                ...state,
                search_committee_members_status: status.SUCCESS,
                searchCommitteeMembers: action.data
            };
        case committeeMembersConstants.SEARCH_COMMITTEE_MEMBERS_FAILURE:
            return {
                ...state,
                search_committee_members_status: status.FAILURE,
                searchCommitteeMembers: null
            };
        case committeeMembersConstants.UPDATE_COMMITTEE_MEMBERS_REQUEST:
            return {
                ...state,
                update_committee_members_status: status.IN_PROGRESS,
                updateCommitteeMembers: action.data
            };
        case committeeMembersConstants.UPDATE_COMMITTEE_MEMBERS_SUCCESS:
            return {
                ...state,
                update_committee_members_status: status.SUCCESS,
                updateCommitteeMembers: action.data
            };
        case committeeMembersConstants.UPDATE_COMMITTEE_MEMBERS_FAILURE:
            return {
                ...state,
                update_committee_members_status: status.FAILURE,
                updateCommitteeMembers: null
            };
        default:
            return state;
    }
}