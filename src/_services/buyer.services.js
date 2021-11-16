import config from '../config';
import { commonFunctions } from "../_utilities";

export const buyerServices = {
    addBuyer,
    deleteBuyer,
    getBuyer,
    searchBuyer,
    updateBuyer
}

function addBuyer() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/addBuyer`, requestOptions).then(response => response.json());
}

function deleteBuyer(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${config.apiUrl}/deleteBuyer/${id}`, requestOptions).then(response => response.json());
}

function getBuyer(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getBuyer/${id}`, requestOptions).then(response => response.json());
}

function searchBuyer() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchBuyer`, requestOptions).then(response => response.json());
}

function updateBuyer() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/updateBuyer`, requestOptions).then(response => response.json());
}