export const FETCH_INVESTOR = "FETCH_INVESTOR";
export const FETCH_INVESTOR_SUCCESS = "FETCH_INVESTOR_SUCCESS";
export const FETCH_INVESTOR_FAILURE = "FETCH_INVESTOR_FAILURE";

export const fetchInvestor = () => ({
  type: FETCH_INVESTOR,
});

export const fetchInvestorSuccess = investor => ({
  type: FETCH_INVESTOR_SUCCESS,
  payload: investor,
});

export const fetchInvestorFailure = message => ({
  type: FETCH_INVESTOR_FAILURE,
  payload: message,
});
