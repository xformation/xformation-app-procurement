import { mailsConstants, status } from '../_constants';

export function mails(state = {}, action) {
    switch (action.type) {
        case mailsConstants.DRAFT_MAIL_REQUEST:
            return {
                ...state,
                draft_mail_status: status.IN_PROGRESS,
                draftMail: action.data
            };
        case mailsConstants.DRAFT_MAIL_SUCCESS:
            return {
                ...state,
                draft_mail_status: status.SUCCESS,
                draftMail: action.data
            };
        case mailsConstants.DRAFT_MAIL_FAILURE:
            return {
                ...state,
                draft_mail_status: status.FAILURE,
                draftMail: null
            };
        case mailsConstants.RECEIVE_EMAIL_REQUEST:
            return {
                ...state,
                receive_email_status: status.IN_PROGRESS,
                receiveEmail: action.data
            };
        case mailsConstants.RECEIVE_EMAIL_SUCCESS:
            return {
                ...state,
                receive_email_status: status.SUCCESS,
                receiveEmail: action.data
            };
        case mailsConstants.RECEIVE_EMAIL_FAILURE:
            return {
                ...state,
                receive_email_status: status.FAILURE,
                receiveEmail: null
            };
        case mailsConstants.SEND_EMAIL_REQUEST:
            return {
                ...state,
                send_email_status: status.IN_PROGRESS,
                sendEmail: action.data
            };
        case mailsConstants.SEND_EMAIL_SUCCESS:
            return {
                ...state,
                send_email_status: status.SUCCESS,
                sendEmail: action.data
            };
        case mailsConstants.SEND_EMAIL_FAILURE:
            return {
                ...state,
                send_email_status: status.FAILURE,
                sendEmail: null
            };
        case mailsConstants.LATEST_EMAIL_REQUEST:
            return {
                ...state,
                latest_email_status: status.IN_PROGRESS,
                latestEmail: action.data
            };
        case mailsConstants.LATEST_EMAIL_SUCCESS:
            return {
                ...state,
                latest_email_status: status.SUCCESS,
                latestEmail: action.data
            };
        case mailsConstants.LATEST_EMAIL_FAILURE:
            return {
                ...state,
                latest_email_status: status.FAILURE,
                latestEmail: null
            };
        default:
            return state;
    }
}
