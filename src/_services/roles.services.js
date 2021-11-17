import config from '../config';
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

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
    return fetch(`${apiEndPoint.ADDROLE}`, requestOptions).then(response => response.json());
}

function deleteRoles(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${apiEndPoint.DELETEROLE}/${id}`, requestOptions).then(response => response.json());
}

function getRoles(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.GETEDITROLE}/${id}`, requestOptions).then(response => response.json());
}

function searchRoles() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.FETCHROLE}`, requestOptions).then(response => response.json());
}

function updateRoles() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${apiEndPoint.UPDATEROLE}`, requestOptions).then(response => response.json());
}