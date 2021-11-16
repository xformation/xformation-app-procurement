import config from '../config';
import { commonFunctions } from "../_utilities";

export const requisitionServices = {
    addRequisition,
    deleteRequisition,
    getRequisition,
    searchRequisition,
    getRequisitionEditData,
    editRequisition,
    getCurrency,
    approveRequisition,
    getbuyerList,
    setRequisitionBuyers
}

function addRequisition(data) {
    const formData = new FormData();
    if (data.requisitionFile) {
        for (let i = 0; i < data.requisitionFile.length; i++) {
            formData.append("requisitionFile[]", data.requisitionFile[i]);
        }
    }
    if (data.requisitionLineItemFile && data.requisitionLineItemFile.length > 0) {
        for (let i = 0; i < data.requisitionLineItemFile.length; i++) {
            formData.append("requisitionLineItemFile[]", data.requisitionLineItemFile[i]);
        }
    }
    formData.append("obj", JSON.stringify(data.obj));
    const requestOptions = commonFunctions.getRequestOptions("POST", {}, formData);
    return fetch(`${config.apiUrl}/addRequisition`, requestOptions).then(response => response.json());
}

function deleteRequisition(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("DELETE", extraHeaders, null);
    return fetch(`${config.apiUrl}/deleteRequisition/${data.id}`, requestOptions).then(response => response.json());
}

function getRequisition(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    let url = "";
    if (data.status) {
        url += `?status=${data.status}`;
    }
    if (data.requisitionNo) {
        url += `${url ? '&' : '?'}id=${data.requisitionNo}`;
    }
    if (data.department) {
        url += `${url ? '&' : '?'}departmentId=${data.department}`;
    }
    if (data.toDate) {
        url += `${url ? '&' : '?'}toDate=${data.toDate}`;
    }
    if (data.fromDate) {
        url += `${url ? '&' : '?'}fromDate=${data.fromDate}`;
    }
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchRequisition${url}`, requestOptions).then(response => response.json());
}

function searchRequisition() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchRequisition`, requestOptions).then(response => response.json());
}

function editRequisition(data) {
    const formData = new FormData();
    if (data.requisitionFile) {
        for (let i = 0; i < data.requisitionFile.length; i++) {
            formData.append("requisitionFile[]", data.requisitionFile[i]);
        }
    }
    if (data.requisitionLineItemFile && data.requisitionLineItemFile.length > 0) {
        for (let i = 0; i < data.requisitionLineItemFile.length; i++) {
            formData.append("requisitionLineItemFile[]", data.requisitionLineItemFile[i]);
        }
    }
    formData.append("obj", JSON.stringify(data.obj));
    const requestOptions = commonFunctions.getRequestOptions("POST", {}, formData);
    return fetch(`${config.apiUrl}/updateRequisition`, requestOptions).then(response => response.json());
}

function getRequisitionEditData(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/getRequisition/${data.id}`, requestOptions).then(response => response.json());
}

function getCurrency(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/searchCurrency`, requestOptions).then(response => response.json());
}

function approveRequisition(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${config.apiUrl}/approveRequisition`, requestOptions).then(response => response.json());
}

function getbuyerList(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`https://d10c1133-0814-46e5-937a-3211cf6287c7.mock.pstmn.io/buyers`, requestOptions).then(response => response.json());
}

function setRequisitionBuyers(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`https://c9cd69b2-eed7-4c06-a92b-f81cb2b8f3d0.mock.pstmn.io/setbuyers`, requestOptions).then(response => response.json());
}