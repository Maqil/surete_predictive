import {
  SEARCH_ANALYSE,
  SEARCH_ANALYSES,
  FETCH_ANALYSES,
  FETCH_ECHANTILLONNAGES,
  LOADING
} from "../actions/types";

const initialState = {
  text: "",
  analyses: [],
  echantillonnages: [],
  loading: false,
  analyse: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ANALYSE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case SEARCH_ANALYSES:
      return {
        ...state,
        analyses: action.payload,
        loading: false
      };
    case FETCH_ANALYSES:
      return {
        ...state,
        analyses: action.payload,
        loading: false
      };
    case FETCH_ECHANTILLONNAGES:
      return {
        ...state,
        echantillonnages: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
