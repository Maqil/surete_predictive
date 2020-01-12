import axios from "axios";

import { FETCH_INCIDENTS } from "./types";

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
