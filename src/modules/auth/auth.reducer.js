import * as types from "../../constants/actionTypes";

const INITIAL_STATE = {
	phone: "+14632222408",
	error: "",
	loading: false,
	confirmResult: null,
	phoneCode: "",
	user: null
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.PHONE_CHANGED:
			return { ...state, phone: action.payload };
		case types.PHONE_CODE_CHANGED:
			return { ...state, phoneCode: action.payload };

		case types.VERIFY_PHONE:
			return { ...state, loading: true, error: "" };

		case types.PHONE_VERIFICATION_CODE_SENT_SUCCESS:
			return {
				...state,
				phone: "",
				loading: false,
				error: "success",
				confirmResult: action.payload
			};

		case types.PHONE_VERIFICATION_CODE_SENT_FAIL:
			return {
				...state,
				loading: false,
				error: "Verfication failed, make sure phone number is correct"
			};

		case types.SET_USER:
			return { ...state, user: action.payload };
		case types.RESET_AUTH_STATE:
			return INITIAL_STATE;
		default:
			return INITIAL_STATE;
	}
};
