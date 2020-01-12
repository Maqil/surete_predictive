import axios from "axios";

import { FETCH_INCIDENTS, FETCH_COUNTER_BY_DATE } from "./types";

export const fetchIncidents = () => dispatch => {
  axios
    .get(`http://localhost:8000/incidents`)
    .then(response =>
      dispatch({
        type: FETCH_INCIDENTS,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchCountIncidents = () => dispatch => {
  axios
    .get(`http://localhost:8000/count_incidents`)
    .then(response =>
      dispatch({
        type: FETCH_COUNTER_BY_DATE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};
