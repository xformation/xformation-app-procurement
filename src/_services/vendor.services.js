import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const vendorServices = {
    addVendor,
    deleteVendor,
    searchVendor,
    getVendor,
    updateVendor
}

function addVendor() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${apiEndPoint.ADDVENDOR}`, requestOptions).then(response => response.json());
}

function deleteVendor(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${apiEndPoint.DELETEVENDOR}/${id}`, requestOptions).then(response => response.json());
}

function getVendor(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.GETEDITVENDOR}/${id}`, requestOptions).then(response => response.json());
}

function searchVendor() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.FETCHVENDOR}`, requestOptions).then(response => response.json());
}

function updateVendor() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${apiEndPoint.UPDATEVENDOR}`, requestOptions).then(response => response.json());
}