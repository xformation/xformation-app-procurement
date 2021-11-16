import config from '../config';
import { commonFunctions } from "../_utilities";

export const rolesServices = {
    addRoles,
    deleteRoles,
    searchRoles,
    getRoles,
    updateRoles
}

function addRoles() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/addRoles`, requestOptions).then(response => response.json());
}

function deleteRoles(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${config.apiUrl}/deleteRoles/${id}`, requestOptions).then(response => response.json());
}

function getRoles(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getRoles/${id}`, requestOptions).then(response => response.json());
}

function searchRoles() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchRoles`, requestOptions).then(response => response.json());
}

function updateRoles() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/updateRoles`, requestOptions).then(response => response.json());
}