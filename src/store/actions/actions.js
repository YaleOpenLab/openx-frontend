export const DISPLAY_ERROR = "DISPLAY_ERROR";
export const HIDE_ERROR = "HIDE_ERROR";

export const displayErrorAction = (type, message) => ({
	type: DISPLAY_ERROR,
	error: {type, message}
});

export const hideErrorAction = () => ({
	type: HIDE_ERROR
});
