import config from '../config';
import { commonFunctions } from "../_utilities";

export const currencyServices = {
    addCurrency,
    deleteCurrency,
    searchCurrency,
    getCurrency,
    updateCurrency
}

function addCurrency() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/addCurrency`, requestOptions).then(response => response.json());
}

function deleteCurrency(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${config.apiUrl}/deleteCurrency/${id}`, requestOptions).then(response => response.json());
}

function getCurrency(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getCurrency/${id}`, requestOptions).then(response => response.json());
}

function searchCurrency() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchCurrency`, requestOptions).then(response => response.json());
}

function updateCurrency() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${config.apiUrl}/updateCurrency`, requestOptions).then(response => response.json());
}