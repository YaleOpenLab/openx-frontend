import {
  USER_ACCOUNT,
  USER_ACCOUNT_SUCCESS,
  USER_ACCOUNT_FAILURE,
  USER_ACCOUNT_UPDATE,
  USER_ACCOUNT_UPDATE_SUCCESS,
  USER_ACCOUNT_UPDATE_FAILURE
} from "./actions";

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

const userAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACCOUNT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case USER_ACCOUNT_SUCCESS:
      return {
        items: action.payload.Entity.U,
        isLoading: false,
        error: null
      };
    case USER_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case USER_ACCOUNT_UPDATE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case USER_ACCOUNT_UPDATE_SUCCESS:
      return {
        ...state,
        updateStatus: action.payload,
        isLoading: false,
        error: null
      };
    case USER_ACCOUNT_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userAccountReducer;
