import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import { reducer as reduxFormReducer } from "redux-form";

export default combineReducers({
  analyses: searchReducer,
  echantillonnages: searchReducer,
  form: reduxFormReducer
});
