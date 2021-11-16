import config from '../config';
import { commonFunctions } from "../_utilities";

export const departmentServices = {
    addDepartment,
    deleteDepartment,
    searchDepartment,
    getDepartment,
    updateDepartment
}

function addDepartment() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/addDepartment`, requestOptions).then(response => response.json());
}

function deleteDepartment(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${config.apiUrl}/deleteDepartment/${id}`, requestOptions).then(response => response.json());
}

function getDepartment() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchDepartment`, requestOptions).then(response => response.json());
}

function searchDepartment() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchDepartment`, requestOptions).then(response => response.json());
}

function updateDepartment() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/updateDepartment`, requestOptions).then(response => response.json());
}