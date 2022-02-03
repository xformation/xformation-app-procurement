import { status } from "../_constants";
import { purchaseOrderServices } from "../_services";
import { alert } from "../_utilities";

export const purchaseOrderAction = {
  addPurchaseOrder,
  getPurchaseOrder,
  searchPurchaseOrder,
  searchApprovePurchaseOrder,
  getApprovePurchaseOrder,
  //   approvePurchaseOrder,
};

function searchPurchaseOrder(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          search_purchase_status: status.IN_PROGRESS,
          searchpurchaseorder: null,
        },
      })
    );
    purchaseOrderServices.searchPurchaseOrder(data).then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                search_purchase_status: status.SUCCESS,
                searchpurchaseorder: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                search_purchase_status: status.FAILURE,
                searchpurchaseorder: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              search_purchase_status: status.FAILURE,
              searchpurchaseorder: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
function searchApprovePurchaseOrder(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_approvepo_status: status.IN_PROGRESS,
          approvePo: null,
        },
      })
    );
    purchaseOrderServices.approvePurchaseOrder(data).then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_approvepo_status: status.SUCCESS,
                approvePo: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_approvepo_status: status.FAILURE,
                approvePo: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              get_approvepo_status: status.FAILURE,
              approvePo: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
function getApprovePurchaseOrder(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          search_approvepo_status: status.IN_PROGRESS,
          search_approvepo: null,
        },
      })
    );
    purchaseOrderServices.getApprovePo(data).then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                search_approvepo_status: status.SUCCESS,
                search_approvepo: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                search_approvepo_status: status.FAILURE,
                search_approvepo: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              search_approvepo_status: status.FAILURE,
              search_approvepo: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
function getPurchaseOrder(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_purchase_status: status.IN_PROGRESS,
          getpurchaseorder: null,
        },
      })
    );
    purchaseOrderServices.getPurchaseOrder(data).then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_purchase_status: status.SUCCESS,
                getpurchaseorder: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_purchase_status: status.FAILURE,
                getpurchaseorder: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              get_purchase_status: status.FAILURE,
              getpurchaseorder: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
function addPurchaseOrder(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          add_purchase_order_status: status.IN_PROGRESS,
          addPurchaseOrder: null,
        },
      })
    );
    purchaseOrderServices.addPurchaseOrder(data).then(
      (response) => {
        if (response.code === 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                add_purchase_order_status: status.SUCCESS,
                addPurchaseOrder: response.object,
              },
            })
          );
          alert.success(response.message);
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                add_purchase_order_status: status.FAILURE,
                addPurchaseOrder: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.FAILURE,
            data: {
              add_purchase_order_status: status.FAILURE,
              addPurchaseOrder: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
// function approvePurchaseOrder(data) {
//   return (dispatch) => {
//     dispatch(
//       dispatchFunction({
//         type: purchaseOrderConstants.ADD_PURCHASE_ORDER_REQUEST,
//         data: null,
//       })
//     );
//     purchaseOrderServices.approvePO(data).then(
//       (response) => {
//         if (response.code === 200) {
//           dispatch(
//             dispatchFunction({
//               type: purchaseOrderConstants.APPROVE_PURCHASE_ORDER_SUCCESS,
//               data: response,
//             })
//           );
//           alert.success(response.message);
//         } else {
//           dispatch(
//             dispatchFunction({
//               type: purchaseOrderConstants.APPROVE_PURCHASE_ORDER_FAILURE,
//               data: response,
//             })
//           );
//           alert.error(response.message);
//         }
//       },
//       (error) => {
//         dispatch(
//           dispatchFunction({
//             type: purchaseOrderConstants.APPROVE_PURCHASE_ORDER_FAILURE,
//             data: error.message,
//           })
//         );
//         alert.error(error.message);
//       }
//     );
//   };
// }

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
    data: data.data,
  };
}
