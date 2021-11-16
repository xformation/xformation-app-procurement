import config from '../config';
import { commonFunctions } from "../_utilities";

export const mailsServices = {
    draftMail,
    getAllMail,
    getSentEmail,
    latestEmail    
}

function draftMail() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/draftMail`, requestOptions).then(response => response.json());
}

function getAllMail() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/getAllMail`, requestOptions).then(response => response.json());
}

function getSentEmail() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/getSentEmail`, requestOptions).then(response => response.json());
}

function latestEmail() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/latestEmail`, requestOptions).then(response => response.json());
}