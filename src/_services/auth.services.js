import config from '../config';
import { commonFunctions } from "../_utilities";

export const authServices = {
    login,
}

function login(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data), true);
    return fetch(`${config.apiUrl}/auth/login`, requestOptions).then(response => response.json());
}
