import config from '../config';
import { commonFunctions } from "../_utilities";

export const quotationServices = {
    addQuotation,
    deleteQuotation,
    getQuotation,
    searchQuotation,
    updateQuotation
}

function addQuotation() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/addQuotation`, requestOptions).then(response => response.json());
}

function deleteQuotation(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${config.apiUrl}/deleteQuotation/${id}`, requestOptions).then(response => response.json());
}

function getQuotation(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getQuotation/${id}`, requestOptions).then(response => response.json());
}

function searchQuotation() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchQuotation`, requestOptions).then(response => response.json());
}

function updateQuotation() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/updateQuotation`, requestOptions).then(response => response.json());
}