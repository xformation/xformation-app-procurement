import config from '../config';
import { commonFunctions } from "../_utilities";

export const contactServices = {
    addContact,
    deleteContact,
    fetchContactList,
    getEditContactData,
    updateContact
}

function addContact(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch('https://a93eb577-66f7-41cb-b50c-6f63a32513ca.mock.pstmn.io/addContact', requestOptions).then(response => response.json());
}

function deleteContact(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch('https://c2a7ab89-89c4-480f-a1e4-3c8cb16c1aaf.mock.pstmn.io/deleteContact/2', requestOptions).then(response => response);
}

function fetchContactList() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch('https://e5d3045c-b97e-4cac-8878-c7fd9cbdb85d.mock.pstmn.io/getContact', requestOptions).then(response => response.json());
}

function getEditContactData(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`https://93e1c756-9a54-4d6e-88fd-6d129024a21d.mock.pstmn.io/getEditContact/${data.id}`, requestOptions).then(response => response.json());
}

function updateContact(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch('https://09e7ce9b-49d0-44b0-8b5c-b3b065a72ef5.mock.pstmn.io/editContact/2', requestOptions).then(response => response.json());
}