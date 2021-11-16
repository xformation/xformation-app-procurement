import config from '../config';
import { commonFunctions } from "../_utilities";

export const rulesServices = {
    addRules,
    deleteRules,
    searchRules,
    getRulesByName,
    getRules,
    updateRules
}

function addRules() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/addRules`, requestOptions).then(response => response.json());
}

function deleteRules(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${config.apiUrl}/deleteRules/${id}`, requestOptions).then(response => response.json());
}

function searchRules(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchRules`, requestOptions).then(response => response.json());
}

function getRulesByName(name) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getRulesByName/${name}`, requestOptions).then(response => response.json());
}

function getRules() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getRules`, requestOptions).then(response => response.json());
}

function updateRules() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/updateRules`, requestOptions).then(response => response.json());
}