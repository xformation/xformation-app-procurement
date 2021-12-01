import { apiEndPoint } from "./apiEndPoint";
import { commonFunctions } from "../_utilities";
export const emailServices = {
    recentCommunication,
    searchallemails,
    sendEmail,
    getEmailDetail,
    deleteEmail
}

function recentCommunication(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.FETCHEMAIL}`, requestOptions).then(response => response.json());
}

function searchallemails(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    let url = "";
    url += `?search=${data.search}`;
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.FEATCHALLEMAIL}${url}`, requestOptions).then(response => response.json());
}

function sendEmail(data) {
    const formData = new FormData();
    formData.append("attechment", data.attechment);
    formData.append("obj", JSON.stringify(data.obj));
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, formData);
    return fetch(`${apiEndPoint.SENDEMAIL}`, requestOptions).then(response => response.json());
}

function getEmailDetail(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.GETEMAIL}/${data.id}`, requestOptions).then(response => response.json());
}

function deleteEmail(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${apiEndPoint.DELETEMAIL}/${data.id}`, requestOptions).then(response => response.json());
}