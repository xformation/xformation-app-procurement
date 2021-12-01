import config from '../config';
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const invoiceServices = {
    addInvoice,
    deleteInvoice,
    getInvoice,
    searchInvoice,
    updateInvoice
}

function addInvoice(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${apiEndPoint.ADDINVOICE}`, requestOptions).then(response => response.json());
}

function deleteInvoice(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${apiEndPoint.DELETEINVOICE}/${id}`, requestOptions).then(response => response.json());
}

function getInvoice(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.GETINVOICE}/${data.id}`, requestOptions).then(response => response.json());
}

function searchInvoice() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.FETCHINVOICE}`, requestOptions).then(response => response.json());
}

function updateInvoice() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${apiEndPoint.UPDATEINVOICE}`, requestOptions).then(response => response.json());
}