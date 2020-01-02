import {DISPLAY_ERROR, HIDE_ERROR} from "../actions/actions";

const initialState = {
	message: "",
	type: "error",
	visible: false
};

const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case DISPLAY_ERROR:
			return {
				message: action.error.message,
				type: action.error.type,
				visible: true,
			};
		case HIDE_ERROR:
			return {
				...initialState,
			};
		default:
			return state;
	}
};

export default errorReducer;
