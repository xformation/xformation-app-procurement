import config from '../config';
import { commonFunctions } from "../_utilities";

export const invoiceServices = {
    addInvoice,
    approveInvoice,
    deleteInvoice,
    getInvoice,
    searchInvoice,
    updateInvoice
}

function addInvoice() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/addInvoice`, requestOptions).then(response => response.json());
}

function approveInvoice() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/approveInvoice`, requestOptions).then(response => response.json());
}

function deleteInvoice(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${config.apiUrl}/deleteInvoice/${id}`, requestOptions).then(response => response.json());
}

function getInvoice(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getInvoice/${id}`, requestOptions).then(response => response.json());
}

function searchInvoice() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchInvoice`, requestOptions).then(response => response.json());
}

function updateInvoice() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/updateInvoice`, requestOptions).then(response => response.json());
}