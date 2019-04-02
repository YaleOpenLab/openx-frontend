import {
  FETCH_INVESTOR,
  FETCH_INVESTOR_SUCCESS,
  FETCH_INVESTOR_FAILURE
} from "./actions";

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

const investorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVESTOR:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_INVESTOR_SUCCESS:
      return {
        items: action.payload.data,
        isLoading: false,
        error: null
      };
    case FETCH_INVESTOR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default investorReducer;