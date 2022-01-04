// import config from '../config';
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const committeeServices = {
    addCommittee,
    searchCommittee,
    getCommitteeType,
}

function searchCommittee() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.COMMITTEE}`, requestOptions).then(response => response.json());
}

function addCommittee() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${apiEndPoint.COMMITTEE}`, requestOptions).then(response => response.json());
}

function getCommitteeType() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.COMMITTEETYPE}`, requestOptions).then(response => response.json());
}
