import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REFRESH_TOKEN
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("lims_token")
    ? localStorage.getItem("lims_token")
    : null,
  user: localStorage.getItem("lims_user")
    ? localStorage.getItem("lims_user")
    : null,
  refresh_token: localStorage.getItem("lims_refresh_token")
    ? localStorage.getItem("lims_refresh_token")
    : null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("lims_token", action.payload.token);
      localStorage.setItem("lims_user", JSON.stringify(action.payload.data));
      localStorage.setItem("lims_refresh_token", action.payload.refresh_token);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.data,
        refresh_token: action.payload.refresh_token
      };
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("lims_token");
      localStorage.removeItem("lims_user");
      localStorage.removeItem("lims_refresh_token");
      return {
        ...state,
        token: null,
        user: null
      };
    case REFRESH_TOKEN:
      localStorage.setItem("lims_token", action.payload.token);
      localStorage.setItem("lims_refresh_token", action.payload.refresh_token);
      console.log(action.payload);
      return {
        ...state,
        token: action.payload.token,
        refresh_token: action.payload.refresh_token
      };
    default:
      return state;
  }
}
