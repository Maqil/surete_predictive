import {
  SEARCH_ANALYSE,
  SEARCH_ANALYSES,
  FETCH_ANALYSES,
  FETCH_ECHANTILLONNAGES,
  LOADING
} from "./types";
import axios from "axios";

export const searchAnalyse = text => dispatch => {
  dispatch({
    type: SEARCH_ANALYSE,
    payload: text
  });
};

export const searchAnalyses = text => dispatch => {
  axios
    .get(`http://localhost:8000/analyse`)
    .then(response =>
      dispatch({
        type: SEARCH_ANALYSES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchAnalyses = payload => {
  return {
    type: FETCH_ANALYSES,
    payload
  };
};

export const fetchEchantillonnages = payload => {
  return {
    type: FETCH_ECHANTILLONNAGES,
    payload
  };
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
