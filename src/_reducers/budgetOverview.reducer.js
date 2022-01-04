import { budgetConstant, status } from '../_constants';

let initialState = {};

export function budget(state = initialState, action) {
    switch (action.type) {
        case budgetConstant.GET_BUDGET_OVERVIEW_REQUEST:
            return {
                ...state,
                budget_overview_status: status.IN_PROGRESS,
                budget_overview_data: action.data
            }
        case budgetConstant.GET_BUDGET_OVERVIEW_SUCCESS:
            return {
                ...state,
                budget_overview_status: status.SUCCESS,
                budget_overview_data: action.data,
            }
        case budgetConstant.GET_BUDGET_OVERVIEW_FAILURE:
            return {
                ...state,
                budget_overview_status: status.FAILURE,
                budget_overview_data: null

            }
        case budgetConstant.GET_ALLOCATED_BUDGET_REQUEST:
            return {
                ...state,
                budget_allocated_status: status.IN_PROGRESS,
                budget_allocatyed_data: action.data
            }
        case budgetConstant.GET_ALLOCATED_BUDGET_SUCCESS:
            return {
                ...state,
                budget_allocated_status: status.SUCCESS,
                budget_allocatyed_data: action.data
            }
        case budgetConstant.GET_ALLOCATED_BUDGET_FAILURE:
            return {
                ...state,
                budget_allocated_status: status.FAILURE,
                budget_allocatyed_data: null
            }


        //   Budhet Allocation reducers

        case budgetConstant.POST_BUDGET_ALLOCATION_REQUEST:
            return {
                ...state,
                budgetAllocation_status: status.IN_PROGRESS,
                budgetAllocation_data: action.data
            }

        case budgetConstant.POST_BUDGET_ALLOCATION_SUCCESS:
            return {
                ...state,
                budgetAllocation_status: status.SUCCESS,
                budgetAllocation_data: action.data
            }
        case budgetConstant.POST_BUDGET_ALLOCATION_FAILURE:
            return {
                ...state,
                budgetAllocation_status: status.FAILURE,
                budgetAllocation_data: null
            }

        default:
            return state;
    }

}