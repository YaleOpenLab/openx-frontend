import {
  FETCH_PROJECT,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_FAILURE
} from "./actions";

const initialState = {
  items: {},
  id: null,
  isLoading: false,
  error: null
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECT:
      return {
        ...state,
        id: action.payload,
        isLoading: true,
        error: null
      };
    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        items: action.payload.data,
        isLoading: false,
        error: null
      };
    case FETCH_PROJECT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default projectReducer;