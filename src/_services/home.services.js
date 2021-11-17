import config from '../config';
import { commonFunctions } from "../_utilities";

export const homeServices = {
    // Userdata
}

function Userdata() {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${config.apiUrl}/Userdata`, requestOptions).then(response => response.json());
}
