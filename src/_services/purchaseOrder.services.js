import config from '../config';
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const purchaseOrderServices = {
    getPurchaseOrder,
    searchPurchaseOrder,
    addPurchaseOrder
}
function getPurchaseOrder(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.GETGPO}/${data}`, requestOptions).then(response => response.json());
}
function searchPurchaseOrder(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.FETCHGPO}`, requestOptions).then(response => response.json());
}

function addPurchaseOrder() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${apiEndPoint.ADDGPODETAIL}`, requestOptions).then(response => response.json());
}