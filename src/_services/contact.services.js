import config from '../config';
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const contactServices = {
    addContact,
    deleteContact,
    fetchContactList,
    getContactData,
    updateContact
}

function addContact(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${apiEndPoint.ADDCONTACT}`, requestOptions).then(response => response.json());
}

function deleteContact(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${apiEndPoint.DELETECONTACT}/${data.id}`, requestOptions).then(response => response.json());
}

function fetchContactList() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.FETCHCONTACT}`, requestOptions).then(response => response.json());
}

function getContactData(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.GETCONTACT}/${data.id}`, requestOptions).then(response => response.json());
}

function updateContact(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${apiEndPoint.UPDATECONTACT}`, requestOptions).then(response => response.json());
}