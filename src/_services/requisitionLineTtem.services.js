import config from '../config';
import { commonFunctions } from "../_utilities";

export const requisitionLineTtemServices = {
    addRequisitionLineItem,
    deleteRequisitionLineItem,
    getRequisitionLineItem,
    searchRequisitionLineItem,
    updateRequisitionLineItem
}

function addRequisitionLineItem() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/addRequisitionLineItem`, requestOptions).then(response => response.json());
}

function deleteRequisitionLineItem(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${config.apiUrl}/deleteRequisitionLineItem/${id}`, requestOptions).then(response => response.json());
}

function getRequisitionLineItem(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getRequisitionLineItem/${id}`, requestOptions).then(response => response.json());
}

function searchRequisitionLineItem() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchRequisitionLineItem`, requestOptions).then(response => response.json());
}

function updateRequisitionLineItem() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("PUT", extraHeaders, null);
    return fetch(`${config.apiUrl}/updateRequisitionLineItem`, requestOptions).then(response => response.json());
}