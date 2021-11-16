import config from '../config';
import { commonFunctions } from "../_utilities";

export const purchaseOrderServices = {
    addPurchaseOrder,
    approvePurchaseOrder,
    deletePurchaseOrder,
    getPurchaseOrder,
    searchPurchaseOrder,
    updatePurchaseOrder
}

function addPurchaseOrder() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/addPurchaseOrder`, requestOptions).then(response => response.json());
}

function approvePurchaseOrder() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/approvePurchaseOrder`, requestOptions).then(response => response.json());
}

function deletePurchaseOrder(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${config.apiUrl}/deletePurchaseOrder/${id}`, requestOptions).then(response => response.json());
}

function getPurchaseOrder(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getPurchaseOrder/${id}`, requestOptions).then(response => response.json());
}

function searchPurchaseOrder() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchPurchaseOrder`, requestOptions).then(response => response.json());
}

function updatePurchaseOrder() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/updatePurchaseOrder`, requestOptions).then(response => response.json());
}