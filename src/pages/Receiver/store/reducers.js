import {
  FETCH_RECEIVER,
  FETCH_RECEIVER_SUCCESS,
  FETCH_RECEIVER_FAILURE
} from "./actions";

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

const receiverReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECEIVER:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_RECEIVER_SUCCESS:
      return {
        items: action.payload.data,
        isLoading: false,
        error: null
      };
    case FETCH_RECEIVER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default receiverReducer;
