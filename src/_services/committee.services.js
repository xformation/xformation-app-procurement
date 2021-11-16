import config from '../config';
import { commonFunctions } from "../_utilities";

export const committeeServices = {
    addCommittee,
    deleteCommittee,
    searchCommittee,
    getCommittee,
    updateCommittee
}

function addCommittee() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/addCommittee`, requestOptions).then(response => response.json());
}

function deleteCommittee(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${config.apiUrl}/deleteCommittee/${id}`, requestOptions).then(response => response.json());
}

function getCommittee(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getCommittee/${id}`, requestOptions).then(response => response.json());
}

function searchCommittee() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchCommittee`, requestOptions).then(response => response.json());
}

function updateCommittee() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/updateCommittee`, requestOptions).then(response => response.json());
}