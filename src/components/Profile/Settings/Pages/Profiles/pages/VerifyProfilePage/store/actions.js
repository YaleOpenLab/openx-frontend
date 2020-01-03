export const FETCH_VERIFY_PROFILE = 'FETCH_VERIFY_PROFILE';
export const FETCH_VERIFY_PROFILE_SUCCESS = 'FETCH_VERIFY_PROFILE_SUCCESS';
export const FETCH_VERIFY_PROFILE_FAILURE = 'FETCH_VERIFY_PROFILE_FAILURE';


export const fetchVerifyAccount = (entity, username) => ({
	type: FETCH_VERIFY_PROFILE,
	entity,
	username,
});

export const fetchVerifyAccountSuccess = (entity, account) => ({
	type: FETCH_VERIFY_PROFILE_SUCCESS,
	entity,
	payload: account
});

export const fetchVerifyAccountFailure = (entity, error) => ({
	type: FETCH_VERIFY_PROFILE_FAILURE,
	error,
	entity
});
