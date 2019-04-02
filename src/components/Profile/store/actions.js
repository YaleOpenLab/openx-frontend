export const USER_ACCOUNT = "FETCH_USER_ACCOUNT";
export const USER_ACCOUNT_SUCCESS = "FETCH_USER_ACCOUNT_SUCCESS";
export const USER_ACCOUNT_FAILURE = "FETCH_USER_ACCOUNT_FAILURE";
export const USER_ACCOUNT_UPDATE = "USER_ACCOUNT_UPDATE";
export const USER_ACCOUNT_UPDATE_SUCCESS = "USER_ACCOUNT_UPDATE_SUCCESS";
export const USER_ACCOUNT_UPDATE_FAILURE = "USER_ACCOUNT_UPDATE_FAILURE";

export const fetchUserAccount = payload => ({
  type: USER_ACCOUNT,
  payload
});

export const fetchUserAccountSuccess = account => ({
  type: USER_ACCOUNT_SUCCESS,
  payload: account
});

export const fetchUserAccountFailure = message => ({
  type: USER_ACCOUNT_FAILURE,
  payload: message
});

export const updateUserAccount = payload => ({
  type: USER_ACCOUNT_UPDATE,
  payload
});

export const updateUserAccountSuccess = account => ({
  type: USER_ACCOUNT_UPDATE_SUCCESS,
  payload: account
});

export const updateUserAccountFailure = message => ({
  type: USER_ACCOUNT_UPDATE_FAILURE,
  payload: message
});
