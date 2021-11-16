import config from '../config';
import { commonFunctions } from "../_utilities";

export const vendorServices = {
    addVendor,
    deleteVendor,
    searchVendor,
    getVendor,
    updateVendor
}

function addVendor() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/addVendor`, requestOptions).then(response => response.json());
}

function deleteVendor(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${config.apiUrl}/deleteVendor/${id}`, requestOptions).then(response => response.json());
}

function getVendor(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getVendor/${id}`, requestOptions).then(response => response.json());
}

function searchVendor() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchVendor`, requestOptions).then(response => response.json());
}

function updateVendor() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/updateVendor`, requestOptions).then(response => response.json());
}