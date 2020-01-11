import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REFRESH_TOKEN
} from "./types";

// Login User
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const formData = new FormData();
  formData.append("_username", email);
  formData.append("_password", password);

  // // Send a POST request
  axios
    .post(
      "http://52.174.162.66/lims/app/public/index.php/login_check",
      formData,
      config
    )
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch(err => {
      console.log(err.response.data);
      dispatch(returnErrors(err.response.data, "LOGIN_FAIL"));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const refreshToken = () => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const formData = new FormData();
  formData.append("refresh_token", localStorage.getItem("lims_refresh_token"));

  // // Send a POST request
  axios
    .post(
      "http://52.174.162.66/lims/app/public/index.php/token/refresh",
      formData,
      config
    )
    // .then(res => console.log(res.data));
    .then(res => dispatch({ type: REFRESH_TOKEN, payload: res.data }))
    .catch(err => {
      // console.log(err.response.data);
      dispatch(returnErrors(err.response.data, "REFRESH_FAIL"));
    });
};
