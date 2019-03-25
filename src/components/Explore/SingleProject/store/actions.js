export const FETCH_PROJECT = "FETCH_PROJECT";
export const FETCH_PROJECT_SUCCESS = "FETCH_PROJECT_SUCCESS";
export const FETCH_PROJECT_FAILURE = "FETCH_PROJECT_FAILURE";

export const fetchProject = id => ({
  type: FETCH_PROJECT,
  payload: id
});

export const fetchProjectSuccess = projects => ({
  type: FETCH_PROJECT_SUCCESS,
  payload: projects
});

export const fetchProjectFailure = message => ({
  type: FETCH_PROJECT_FAILURE,
  payload: message
});
