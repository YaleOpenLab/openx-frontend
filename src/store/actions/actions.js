export const DISPLAY_ERROR = "DISPLAY_ERROR";
export const HIDE_ERROR = "HIDE_ERROR";
export const SET_PROGRESS = "SET_PROGRESS";
export const SET_PROGRESS_SUCCESS = "SET_PROGRESS_SUCCESS";
export const SET_PROGRESS_FAILURE = "SET_PROGRESS_FAILURE";

export const displayErrorAction = (type, message) => ({
	type: DISPLAY_ERROR,
	error: {type, message}
});

export const hideErrorAction = () => ({
	type: HIDE_ERROR
});

export const progressAction = (username, progress) => ({
	type: SET_PROGRESS,
	data: {username, progress}
});

export const progressActionFailure = (error) => ({
	type: SET_PROGRESS_FAILURE,
	error
});

export const progressActionSuccess = (data) => ({
	type: SET_PROGRESS_SUCCESS,
	data
});
