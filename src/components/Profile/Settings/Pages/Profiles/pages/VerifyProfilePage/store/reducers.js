import {FETCH_VERIFY_PROFILE, FETCH_VERIFY_PROFILE_FAILURE, FETCH_VERIFY_PROFILE_SUCCESS} from "./actions";

const initialState = {
	user: {
		Username: '',
		PublicKey: '',
		Name: ''
	},
	isLoading: false,
	error: ''
};

const verifyAccountReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_VERIFY_PROFILE:
			return {
				user: {
					Username: '',
					PublicKey: ''
				},
				isLoading: true,
			};
		case FETCH_VERIFY_PROFILE_SUCCESS:
			return {
				user: {
					Username: action.payload.Username || action.payload.U.Username,
					Name: action.payload.Name || action.payload.U.Name,
					PublicKey: action.payload.StellarWallet && action.payload.StellarWallet.PublicKey || action.payload.U && action.payload.U.StellarWallet.PublicKey,
				},
				isLoading: false,
			};
		case FETCH_VERIFY_PROFILE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.error
			};
		default:
			return state;
	}
};

export default verifyAccountReducer;
