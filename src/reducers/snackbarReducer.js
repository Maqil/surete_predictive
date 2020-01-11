import {
  SNACKBAR_SUCCESS,
  SNACKBAR_CLEAR,
  SNACKBAR_ERROR
} from "../actions/types";

const snackbarReducer = (state = {}, action) => {
  switch (action.type) {
    case SNACKBAR_SUCCESS:
      return {
        ...state,
        SnackbarOpen: true,
        SnackbarType: "success",
        SnackbarTitle: "Félicitation",
        // SnackbarMessage: action.message
        SnackbarMessage: action.payload
      };
    case SNACKBAR_ERROR:
      return {
        ...state,
        SnackbarOpen: true,
        SnackbarType: "error",
        SnackbarTitle: "Oops !",
        SnackbarMessage: action.message
      };
    case SNACKBAR_CLEAR:
      return {
        ...state,
        SnackbarOpen: false
      };
    default:
      return state;
  }
};

export default snackbarReducer;
