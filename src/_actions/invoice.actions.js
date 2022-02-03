import { status } from "../_constants";
import { invoiceServices } from "../_services";
import { alert, commonFunctions } from "../_utilities";

export const invoiceAction = {
  addInvoice,
  deleteInvoice,
  getInvoice,
  searchInvoice,
  updateInvoice,
  getNewInvoice,
};

function addInvoice(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          add_invoice_status: status.IN_PROGRESS,
          addInvoice: null,
        },
      })
    );
    invoiceServices.addInvoice(data).then(
      (response) => {
        if (response.status) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                add_invoice_status: status.SUCCESS,
                addInvoice: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                add_invoice_status: status.FAILURE,
                addInvoice: response,
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
              add_invoice_status: status.FAILURE,
              addInvoice: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}

function deleteInvoice(id) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          delete_invoice_status: status.IN_PROGRESS,
          deleteInvoice: null,
        },
      })
    );
    invoiceServices.deleteInvoice(id).then(
      (response) => {
        if (response.status) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                delete_invoice_status: status.SUCCESS,
                deleteInvoice: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                delete_invoice_status: status.FAILURE,
                deleteInvoice: response,
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
              delete_invoice_status: status.FAILURE,
              deleteInvoice: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}

function getInvoice(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_invoice_status: status.IN_PROGRESS,
          getinvoicedata: null,
        },
      })
    );
    invoiceServices.getInvoice(data).then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_invoice_status: status.SUCCESS,
                getinvoicedata: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_invoice_status: status.FAILURE,
                getinvoicedata: response,
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
              get_invoice_status: status.FAILURE,
              getinvoicedata: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}

function getNewInvoice(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          get_new_invoice_status: status.IN_PROGRESS,
          newInvoiceData: null,
        },
      })
    );
    invoiceServices.getNewInvoice(data).then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                get_new_invoice_status: status.SUCCESS,
                newInvoiceData: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                get_new_invoice_status: status.FAILURE,
                newInvoiceData: response,
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
              get_new_invoice_status: status.FAILURE,
              newInvoiceData: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
function searchInvoice(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          search_invoice_status: status.IN_PROGRESS,
          searchInvoice: null,
        },
      })
    );
    invoiceServices.searchInvoice(data).then(
      (response) => {
        if (response.code == 200) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                search_invoice_status: status.SUCCESS,
                searchInvoice: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                search_invoice_status: status.FAILURE,
                searchInvoice: response,
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
              search_invoice_status: status.FAILURE,
              searchInvoice: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
  };
}
function updateInvoice(id) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: status.IN_PROGRESS,
        data: {
          update_invoice_status: status.IN_PROGRESS,
          updateInvoice: null,
        },
      })
    );
    invoiceServices.updateInvoice(id).then(
      (response) => {
        if (response.status) {
          dispatch(
            dispatchFunction({
              type: status.SUCCESS,
              data: {
                update_invoice_status: status.SUCCESS,
                updateInvoice: response.object,
              },
            })
          );
        } else {
          dispatch(
            dispatchFunction({
              type: status.FAILURE,
              data: {
                update_invoice_status: status.FAILURE,
                updateInvoice: response,
              },
            })
          );
          alert.error(response.message);
        }
      },
      (error) => {
        dispatch(
          dispatchFunction({
            type: status.IN_PROGRESS,
            data: {
              update_invoice_status: status.FAILURE,
              updateInvoice: error.message,
            },
          })
        );
        alert.error(error.message);
      }
    );
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
    data: data.data,
  };
}
