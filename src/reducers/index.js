import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import snackbarReducer from "./snackbarReducer";

export default combineReducers({
  // Auth
  auth: authReducer,
  error: errorReducer,
  // SnackBar
  snackbar: snackbarReducer
  // Filters

  // addlot: reduxFormReducer
  // // searchReducer
  // analyses: searchReducer,
  // analysesreqs: searchReducer,
  // echantillonnages: searchReducer
});
