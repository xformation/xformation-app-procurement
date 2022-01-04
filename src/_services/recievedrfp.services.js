import config from '../config';
import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const recievedrfpServices = {
    searchRecievedRFP,
    getRecieveRFP,
    addRecieveRFP,
    searchRecievedRFQ,
    getRecieveRFQ,
    addRecieveRFQ,
    getTrackRfpData
}

function searchRecievedRFP(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.RECIEVEDRFP}`, requestOptions).then(response => response.json());
}

function getRecieveRFP(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.RECIEVEDRFP}/${data.id}`, requestOptions).then(response => response.json());
}

function addRecieveRFP(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${apiEndPoint.RECIEVEDRFP}`, requestOptions).then(response => response.json());
}

function searchRecievedRFQ() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.RECIEVEDRFQ}`, requestOptions).then(response => response.json());
}

function getRecieveRFQ(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.RECIEVEDRFQ}/${data.id}`, requestOptions).then(response => response.json());
}

function addRecieveRFQ(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${apiEndPoint.RECIEVEDRFQ}`, requestOptions).then(response => response.json());
}

function getTrackRfpData(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.TRACKFRPDATA}/${data.id}`, requestOptions).then(response => response.json());
}