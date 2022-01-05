import config from '../config';
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const purchaseOrderServices = {
    getPurchaseOrder,
    searchPurchaseOrder,
    addPurchaseOrder,
    approvePurchaseOrder,
    getApprovePo,
    approvePO
}
function getPurchaseOrder(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.PO}/${data.id}`, requestOptions).then(response => response.json());
}
function searchPurchaseOrder(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.PO}`, requestOptions).then(response => response.json());
}

function addPurchaseOrder(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${apiEndPoint.PO}`, requestOptions).then(response => response.json());
}

function approvePurchaseOrder(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.APPROVEPO}`, requestOptions).then(response => response.json());
}

function approvePO(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${apiEndPoint.APPROVEPO}/${data.id}`, requestOptions).then(response => response.json());
}
function getApprovePo(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.APPROVEPO}/${data.id}`, requestOptions).then(response => response.json());
}
