import config from '../config';
import { commonFunctions } from "../_utilities";

export const committeeMembersServices = {
    addCommitteeMembers,
    getCommitteeMembers,
    searchCommitteeMembers,
    updateCommitteeMembers
}

function addCommitteeMembers() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/addCommitteeMembers`, requestOptions).then(response => response.json());
}

function getCommitteeMembers(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getCommitteeMembers/${id}`, requestOptions).then(response => response.json());
}

function searchCommitteeMembers() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchCommitteeMembers`, requestOptions).then(response => response.json());
}

function updateCommitteeMembers() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/updateCommitteeMembers`, requestOptions).then(response => response.json());
}