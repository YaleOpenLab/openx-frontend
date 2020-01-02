import {TYPES} from "./actionTypes";

export const USER_ACCOUNT_UPDATE = "USER_ACCOUNT_UPDATE";
export const USER_ACCOUNT_UPDATE_SUCCESS = "USER_ACCOUNT_UPDATE_SUCCESS";
export const USER_ACCOUNT_UPDATE_FAILURE = "USER_ACCOUNT_UPDATE_FAILURE";

export const USER_ACCOUNT_LOGOUT = "USER_ACCOUNT_LOGOUT";

export const logoutUserAccount = payload => ({
  type: TYPES.LOGOUT,
  payload
});

export const updateAccount = (entity, data) => ({
  type: TYPES.UPDATE,
	entity,
	data,
});

export const updateAccountSuccess = (entity) => ({
  type: TYPES[entity].UPDATE_SUCCESS,
	entity,
});

export const updateAccountFailure = (entity, message) => ({
  type: TYPES[entity].UPDATE_FAILURE,
  payload: message
});

export const registerAction = (entity, data) => ({
	type: TYPES.REGISTER,
	entity,
	data,
});

export const registerActionSuccess = (entity, data) => ({
	type: TYPES[entity].REGISTER_SUCCESS,
	entity,
	data
});

export const registerActionFailure = (entity, data) => ({
	type: TYPES[entity].REGISTER_FAILURE,
	data,
	entity
});

export const validateAction = (entity, username) => ({
	type: TYPES.VALIDATE,
	entity,
	username,
});

export const validateActionSuccess = (entity, account) => ({
	type: TYPES[entity].VALIDATE_SUCCESS,
	entity,
	payload: account
});

export const validateActionFailure = (entity, message) => ({
	type: TYPES[entity].VALIDATE_FAILURE,
	message: message,
	entity
});
