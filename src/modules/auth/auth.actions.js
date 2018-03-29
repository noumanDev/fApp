// import firebase from "react-native-firebase";
// import * as types from "../../constants/actionTypes";

// export const phoneChanged = text => {
// 	return {
// 		type: types.PHONE_CHANGED,
// 		payload: text
// 	};
// };

// export const phoneCodeChanged = text => {
// 	return {
// 		type: types.PHONE_CODE_CHANGED,
// 		payload: text
// 	};
// };

// export const verifyPhone = PhoneNumber => {
// 	return dispatch => {
// 		dispatch({ type: types.VERIFY_PHONE });
// 		console.log("phonenumber", PhoneNumber);
// 		firebase
// 			.auth()
// 			.signInWithPhoneNumber(PhoneNumber)
// 			.then(confirmResult => {
// 				console.log(confirmResult);
// 				global.confirmResult = confirmResult;
// 				dispatch({ type: types.PHONE_VERIFICATION_CODE_SENT_SUCCESS }); //, payload: confirmResult.confirm })
// 			})
// 			.catch(error => {
// 				console.log(error);
// 				dispatch({ type: types.PHONE_VERIFICATION_CODE_SENT_FAIL });
// 			});
// 	};
// };

// export const confirmPhoneCode = (PhoneCode, ConfirmResult, context) => {

// 	return dispatch => {
// 		global.confirmResult
// 			.confirm(PhoneCode)
// 			.then(user => console.log("user logged in",user))
// 			.catch(err => console.log(err));
// 	};
// };

// export const setUser = user => {
// 	return {
// 		type: types.SET_USER,
// 		payload: user._user
// 	};
// };

// export const resetAuthState = () => {
// 	return {
// 		type: types.RESET_AUTH_STATE
// 	};
// };
