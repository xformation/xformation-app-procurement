import { apiEndPoint } from "./apiEndPoint";
import { commonFunctions } from '../_utilities';

export const budgetServices = {
    getBudgetOverview,
    getBudgetAllocated,
    sendBudgeAllocation
}

function getBudgetOverview(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, JSON.stringify(data), null);
    return fetch(`${apiEndPoint.GETBUDGET}`, requestOptions).then(response => response.json());
};

function getBudgetAllocated(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("GET", extraHeaders, null);
    return fetch(`${apiEndPoint.GETBUDGETALLOCATED}/${data.id}`, requestOptions).then(response => response.json());
}



//  Budget allocation
function sendBudgeAllocation(data) {
    const extraHeaders = {
        "Content-Type": "application/json"
    };
    const requestOptions = commonFunctions.getRequestOptions("POST", extraHeaders, JSON.stringify(data), true);
    return fetch(`${apiEndPoint.ADDBUDGETALLOCATION}`, requestOptions).then(response => response.json());
}