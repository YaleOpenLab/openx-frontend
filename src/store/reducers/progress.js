import {PROGRESS, PROGRESS_FAILURE, PROGRESS_SUCCESS} from "../actions/actions";

const initialState = {
	level: 0,
	error: ''
};

const progressReducer = (state = initialState, action) => {
	switch (action.type) {
		case PROGRESS:
			return {
				...state,
			};
		case PROGRESS_SUCCESS:
			return {
				...state,
			};
		case PROGRESS_FAILURE:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}
};

export default progressReducer;
