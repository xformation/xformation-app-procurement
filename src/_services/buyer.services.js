import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const buyerServices = {
    addBuyer,
    deleteBuyer,
    getBuyer,
    updateBuyer
}

function addBuyer() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${apiEndPoint.ADDBUYER}`, requestOptions).then(response => response.json());
}

function deleteBuyer(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${apiEndPoint.DELETEBUYER}/${id}`, requestOptions).then(response => response.json());
}

function getBuyer(id) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.GETEDITBUYER}/${id}`, requestOptions).then(response => response.json());
}

function updateBuyer() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, null);
    return fetch(`${apiEndPoint.UPDATEBUYER}`, requestOptions).then(response => response.json());
}