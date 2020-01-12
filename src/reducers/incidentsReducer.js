import { FETCH_INCIDENTS, FETCH_COUNTER_BY_DATE } from "../actions/types";

const initialState = {
  incidents: [],
  incidentsCounterByDate: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_INCIDENTS:
      return {
        ...state,
        incidents: action.payload
      };
    case FETCH_COUNTER_BY_DATE:
      return {
        ...state,
        incidentsCounterByDate: action.payload
      };
    default:
      return state;
  }
}
