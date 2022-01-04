import { commonFunctions } from "../_utilities";
import { apiEndPoint } from "./apiEndPoint";

export const vendorServices = {
    addVendor,
}

function addVendor(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data));
    return fetch(`${apiEndPoint.ADDVENDOR}`, requestOptions).then(response => response.json());
}
