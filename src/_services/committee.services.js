// import config from '../config';
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const committeeServices = {
    addCommittee,
    // deleteCommittee,
    searchCommittee,
    getCommitteeType,
    // updateCommittee
}

function addCommittee() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${apiEndPoint.ADDCOMMITTEE}`, requestOptions).then(response => response.json());
}

// function deleteCommittee(id) {
//     const extraHeaders = {
//         "Content-Type": "application/json"
//     };
//     const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
//     return fetch(`${apiEndPoint.DELETECOMMITTEE}/${id}`, requestOptions).then(response => response.json());
// }

function getCommitteeType(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.GETCOMMITTEETYPE}`, requestOptions).then(response => response.json());
}

function searchCommittee() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.FETCHCOMMITTEE}`, requestOptions).then(response => response.json());
}

// function updateCommittee() {
//     const extraHeaders = {
//         "Content-Type": "application/json"
//     };
//     const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
//     return fetch(`${apiEndPoint.UPDATECOMMITTEE}`, requestOptions).then(response => response.json());
// }