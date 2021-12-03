import { kanbanConstants } from '../_constants';
import { kanbanServices } from '../_services';
import { alert, commonFunctions } from '../_utilities';

export const kanbanActions = {
    fetchKanbanList,

};

function fetchKanbanList(data) {
    return dispatch => {
        dispatch(dispatchFunction({
            type: kanbanConstants.FETCH_KANBAN_REQUEST,
            data: null
        }));
        kanbanServices.fetchKanbanList(data)
            .then(
                response => {
                    if (response.code === 200) {
                        dispatch(dispatchFunction({
                            type: kanbanConstants.FETCH_KANBAN_SUCCESS,
                            data: response.object
                        }));
                    } else {
                        dispatch(dispatchFunction({
                            type: kanbanConstants.FETCH_KANBAN_FAILURE,
                            data: response
                        }));
                        alert.error(response.message);
                    }
                },
                error => {
                    dispatch(dispatchFunction({
                        type: kanbanConstants.FETCH_KANBAN_FAILURE,
                        data: error.message
                    }));
                    alert.error(error.message);
                }
            )
    };
}


function dispatchFunction(data) {
    // if (data.data && data.data.code === 401) {
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

