import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from "../actions";

const initialState = {
  projects: [],
  isLoading: false,
  error: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        projects: [action.payload],
        isLoading: false,
        error: null
      };
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
