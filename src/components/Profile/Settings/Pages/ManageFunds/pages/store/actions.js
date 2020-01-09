export const FETCH_FUNDS_PROFILE = 'FETCH_FUNDS_PROFILE';
export const FETCH_FUNDS_PROFILE_SUCCESS = 'FETCH_FUNDS_PROFILE_SUCCESS';
export const FETCH_FUNDS_PROFILE_FAILURE = 'FETCH_FUNDS_PROFILE_FAILURE';


export const fetchFundsAccount = (entity, username) => ({
	type: FETCH_FUNDS_PROFILE,
	entity,
	username,
});

export const fetchFundsAccountSuccess = (entity, account) => ({
	type: FETCH_FUNDS_PROFILE_SUCCESS,
	entity,
	payload: account
});

export const fetchFundsAccountFailure = (entity, error) => ({
	type: FETCH_FUNDS_PROFILE_FAILURE,
	error,
	entity
});
