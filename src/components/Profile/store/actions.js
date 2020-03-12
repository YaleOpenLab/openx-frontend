import { TYPES } from "./actionTypes";

export const logoutUserAccount = payload => ({
  type: TYPES.LOGOUT,
  payload
});

export const updateAccount = (entity, data) => ({
  type: TYPES.UPDATE,
  entity,
  data
});

export const updateAccountSuccess = entity => ({
  type: TYPES[entity].UPDATE_SUCCESS,
  entity
});

export const updateAccountFailure = (entity, message) => ({
  type: TYPES[entity].UPDATE_FAILURE,
  entity,
  payload: message
});

export const registerAction = (entity, data) => ({
  type: TYPES.REGISTER,
  entity,
  data
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

export const registerEntityAction = (entity, data) => ({
  type: TYPES.REGISTER_ENTITY,
  entity,
  data
});

export const registerEntityActionSuccess = (entity, data) => ({
  type: TYPES[entity].REGISTER_SUCCESS,
  entity,
  data
});

export const registerEntityActionFailure = (entity, data) => ({
  type: TYPES[entity].REGISTER_FAILURE,
  data,
  entity
});

export const setCompanyAction = (entity, data) => ({
  type: TYPES.SET_COMPANY,
  entity,
  data
});

export const setCompanyActionSuccess = (entity, data) => ({
  type: TYPES[entity].SET_COMPANY_SUCCESS,
  entity,
  data
});

export const setCompanyActionFailure = (entity, data) => ({
  type: TYPES[entity].SET_COMPANY_FAILURE,
  data,
  entity
});

export const registerCompanyAction = (entity, data) => ({
  type: TYPES.REGISTER_COMPANY,
  entity,
  data
});

export const registerCompanyActionSuccess = (entity, data) => ({
  type: TYPES[entity].REGISTER_COMPANY_SUCCESS,
  entity,
  data
});

export const registerCompanyActionFailure = (entity, data) => ({
  type: TYPES[entity].REGISTER_COMPANY_FAILURE,
  data,
  entity
});

export const validateAction = (entity, username) => ({
  type: TYPES[entity].VALIDATE,
  entity,
  username
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

export const dashboardAction = (entity, username) => ({
  type: TYPES[entity].GET_DASHBOARD,
  entity,
  username
});

export const dashboardActionSuccess = (entity, account) => ({
  type: TYPES[entity].GET_DASHBOARD_SUCCESS,
  entity,
  payload: account
});

export const dashboardActionFailure = (entity, message) => ({
  type: TYPES[entity].GET_DASHBOARD_FAILURE,
  message: message,
  entity
});

export const validateEntityAction = username => ({
  type: TYPES.entity.VALIDATE,
  entity: "entity",
  username
});

export const validateEntityActionSuccess = (entity, account) => ({
  type: TYPES[entity].VALIDATE_SUCCESS,
  entity,
  payload: account
});

export const validateEntityActionFailure = (entity, message) => ({
  type: TYPES[entity].VALIDATE_FAILURE,
  entity,
  message: message
});

export const getUserRoles = () => ({
  type: TYPES.GET_USER_ROLES
});

export const getUserRolesSuccess = data => ({
  type: TYPES.GET_USER_ROLES_SUCCESS,
  data
});

export const getUserRolesFailure = message => ({
  type: TYPES.GET_USER_ROLES_SUCCESS,
  message
});
