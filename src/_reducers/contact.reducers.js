import { contactConstants, status } from '../_constants';

export function contact(state = {}, action) {
    switch (action.type) {
        case contactConstants.ADD_CONTACT_REQUEST:
            return {
                ...state,
                add_contact_status: status.IN_PROGRESS,
                addContact: action.data
            };
        case contactConstants.ADD_CONTACT_SUCCESS:
            return {
                ...state,
                add_contact_status: status.SUCCESS,
                addContact: action.data
            };
        case contactConstants.ADD_CONTACT_FAILURE:
            return {
                ...state,
                add_contact_status: status.FAILURE,
                addContact: null
            };
        case contactConstants.DELETE_CONTACT_REQUEST:
            return {
                ...state,
                delete_contact_status: status.IN_PROGRESS,
                deleteContact: action.data
            };
        case contactConstants.DELETE_CONTACT_SUCCESS:
            return {
                ...state,
                delete_contact_status: status.SUCCESS,
                deleteContact: action.data
            };
        case contactConstants.DELETE_CONTACT_FAILURE:
            return {
                ...state,
                delete_contact_status: status.FAILURE,
                deleteContact: null
            };
        case contactConstants.GET_CONTACT_REQUEST:
            return {
                ...state,
                get_contact_status: status.IN_PROGRESS,
                getContact: action.data
            };
        case contactConstants.GET_CONTACT_SUCCESS:
            return {
                ...state,
                get_contact_status: status.SUCCESS,
                getContact: action.data
            };
        case contactConstants.GET_CONTACT_FAILURE:
            return {
                ...state,
                get_contact_status: status.FAILURE,
                getContact: null
            };
        case contactConstants.GET_EDIT_CONTACT_REQUEST:
            return {
                ...state,
                get_edit_contact_status: status.IN_PROGRESS,
                contactData: action.data
            };
        case contactConstants.GET_EDIT_CONTACT_SUCCESS:
            return {
                ...state,
                get_edit_contact_status: status.SUCCESS,
                contactData: action.data
            };
        case contactConstants.GET_EDIT_CONTACT_FAILURE:
            return {
                ...state,
                get_edit_contact_status: status.FAILURE,
                contactData: null
            };
        case contactConstants.UPDATE_CONTACT_REQUEST:
            return {
                ...state,
                update_contact_status: status.IN_PROGRESS,
                updateContact: action.data
            };
        case contactConstants.UPDATE_CONTACT_SUCCESS:
            return {
                ...state,
                update_contact_status: status.SUCCESS,
                updateContact: action.data
            };
        case contactConstants.UPDATE_CONTACT_FAILURE:
            return {
                ...state,
                update_contact_status: status.FAILURE,
                updateContact: null
            };
        default:
            return state;
    }
}