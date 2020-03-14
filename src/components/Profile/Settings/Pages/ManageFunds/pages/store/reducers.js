import {FETCH_FUNDS_PROFILE, FETCH_FUNDS_PROFILE_FAILURE, FETCH_FUNDS_PROFILE_SUCCESS} from "./actions";

const initialState = {
	user: {
		Username: '',
		PublicKey: '',
		Name: '',
		Kyc: false,
	},
	isLoading: false,
	error: ''
};

const fundsAccountReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FUNDS_PROFILE:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_FUNDS_PROFILE_SUCCESS:
			return {
				...state,
				user: {
					Username: action.payload.Username || (action.payload.U && action.payload.U.Username),
					Name: action.payload.Name || (action.payload.U && action.payload.U.Name),
					PublicKey: (action.payload.StellarWallet && action.payload.StellarWallet.PublicKey) || (action.payload.U && action.payload.U.StellarWallet.PublicKey),
					Kyc: (action.payload.Kyc) || (action.payload.U && action.payload.U.Kyc),
				},
			};
		case FETCH_FUNDS_PROFILE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.error
			};
		default:
			return state;
	}
};

export default fundsAccountReducer;
