import config from '../config';
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const purchaseOrderServices = {
    getPurchaseOrder,
    searchPurchaseOrder,
    addPurchaseOrder,
    approvePurchaseOrder,
    getApprovePo,
}
function getPurchaseOrder(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.GETGPO}/${data.id}`, requestOptions).then(response => response.json());
}
function searchPurchaseOrder(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.FETCHGPO}`, requestOptions).then(response => response.json());
}
function approvePurchaseOrder(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.FETCHGAPPROVEPO}`, requestOptions).then(response => response.json());
}

function getApprovePo(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.GETAPO}/${data.id}`, requestOptions).then(response => response.json());
}
function addPurchaseOrder(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${apiEndPoint.ADDGPODETAIL}`, requestOptions).then(response => response.json());
}