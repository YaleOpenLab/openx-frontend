export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_FAILURE = "FETCH_PROJECTS_FAILURE";

export const fetchProjects = type => ({
  type: FETCH_PROJECTS,
  payload: type,
});

export const fetchProjectsSuccess = projects => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload: projects,
});

export const fetchProjectsFailure = message => ({
  type: FETCH_PROJECTS_FAILURE,
  payload: message,
});
