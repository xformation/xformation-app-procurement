import { budgetConstant } from '../_constants';
import { budgetServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const budgetActions = {
    getBugetOverview,
    getBugetAllocated,
    sendBudghetAllocation
};
function getBugetOverview(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: budgetConstant.GET_BUDGET_OVERVIEW_REQUEST,
            data: null
        }));
        budgetServices.getBudgetOverview(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: budgetConstant.GET_BUDGET_OVERVIEW_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: budgetConstant.GET_BUDGET_OVERVIEW_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: budgetConstant.GET_BUDGET_OVERVIEW_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

function getBugetAllocated(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: budgetConstant.GET_ALLOCATED_BUDGET_REQUEST,
            data: null
        }));
        budgetServices.getBudgetAllocated(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: budgetConstant.GET_ALLOCATED_BUDGET_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: budgetConstant.GET_ALLOCATED_BUDGET_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: budgetConstant.GET_ALLOCATED_BUDGET_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            );
    };
}

//  Budget allocation 

function sendBudghetAllocation(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: budgetConstant.POST_BUDGET_ALLOCATION_REQUEST,
            data: null
        }));

        budgetServices.sendBudgeAllocation(data)
        .then(response => {
            if (response.code === 200) {
                dispatch(dispatchFunction({
                    type: budgetConstant.POST_BUDGET_ALLOCATION_SUCCESS,
                    data: response.object
                }));
            } else {
                dispatch(dispatchFunction({
                    type: budgetConstant.POST_BUDGET_ALLOCATION_FAILURE,
                    data: response
                }));
                alert.error(response.message)
            }
        }, error => {
            dispatch(dispatchFunction({
                type: budgetConstant.POST_BUDGET_ALLOCATION_FAILURE,
                data: error.message
            }));
            alert.error(error.message);
        }
        )
    }




}

function dispatchFunction(data) {
    // if(data.data && data.data.code === 401){
    //     commonFunctions.onLogout();
    //     return {
    //         type: authConstants.USER_LOGOUT,
    //         data: null
    //     };
    // }
    return {
        type: data.type,
        data: data.data
    };
}