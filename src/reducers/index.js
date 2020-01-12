import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import snackbarReducer from "./snackbarReducer";
import incidentsReducer from "./incidentsReducer";

export default combineReducers({
  // Auth
  auth: authReducer,
  error: errorReducer,
  // SnackBar
  snackbar: snackbarReducer,
  // Incidents
  incidents: incidentsReducer

  // addlot: reduxFormReducer
  // // searchReducer
  // analyses: searchReducer,
  // analysesreqs: searchReducer,
  // echantillonnages: searchReducer
});
