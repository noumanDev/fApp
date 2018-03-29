import React, { Component } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import { Input, Spinner } from "../_global";
import {
	phoneChanged,
	phoneCodeChanged,
	verifyPhone,
	confirmPhoneCode,
	setUser,
	resetAuthState
} from "./auth.actions";

class PhoneVerify extends Component {
	constructor(props) {
		super(props);
		this.unsubscribe = null;
	}

	componentDidMount() {
		this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
			console.log(user);
			if (user) {
				console.log("user already logged in");
				this.props.setUser(user);
				this.navigateToLocationPicker();
			} else {
				console.log("user not logged in, reset auth state");
				this.props.resetAuthState();
			}
		});
	}

	navigateToLocationPicker() {
		this.props.navigator.push({
			screen: "googleMap.LocationPicker",
			title: "Pick Location",
			backButtonHidden: true
		});
	}

	componentWillUnmount() {
		console("componentWillUnmount, unsubscrbe");
		if (this.unsubscribe) this.unsubscribe();
	}

	onPhoneChange(text) {
		this.props.phoneChanged(text);
	}
	onPhoneCodeChange(text) {
		if (text.length > 6) return;
		this.props.phoneCodeChanged(text);

		if (text.length == 6)
			this.props.confirmPhoneCode(text, this.props.confirmResult);
	}

	onVerifyBtnPress() {
		this.props.verifyPhone(this.props.phone);
	}
	onSignoutPress() {
		firebase.auth().signOut();
		console.log("sign out success");
	}
	renderButton() {
		if (this.props.loading) {
			return (
				<View>
					<Spinner size="large" />
				</View>
			);
		}
		return (
			<Button title="Verify" onPress={this.onVerifyBtnPress.bind(this)}>
				Verify
			</Button>
		);
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: "white" }}>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}

	render() {
		const { messageStyle, inputStyle } = styles;
		return (
			<View style={{ marginTop: 130 }}>
				<Text style={messageStyle}>
					First, let's confirm your number
				</Text>
				<View
					style={{
						borderBottomWidth: 1,
						borderColor: "blue",
						justifyContent: "center"
					}}
				>
					<TextInput
						style={inputStyle}
						placeholder="+923425289404"
						onChangeText={this.onPhoneChange.bind(this)}
						value={this.props.phone}
						keyboardType="phone-pad"
					/>
				</View>
				{this.renderError()}
				{this.renderButton()}
				<View>
					<Text>Enter Six Digit Code</Text>
					<TextInput
						style={inputStyle}
						placeholder="------"
						onChangeText={this.onPhoneCodeChange.bind(this)}
						value={this.props.phoneCode}
						keyboardType="phone-pad"
					/>
				</View>
				<Button
					title="Sign out"
					onPress={this.onSignoutPress.bind(this)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	messageStyle: {
		textAlign: "center"
	},
	errorTextStyle: {
		fontSize: 14,
		alignSelf: "center",
		color: "red"
	},
	inputStyle: {
		textAlign: "center",
		height: 50
		//width:180,
		//borderWidth:2

		//borderRadius:20
	}
});

const mapStateToProps = state => {
	return {
		phone: state.auth.phone,
		phoneCode: state.auth.phoneCode,
		error: state.auth.error,
		loading: state.auth.loading,
		confirmResult: state.auth.confirmResult,
		user: state.auth.user
	};
};
export default connect(mapStateToProps, {
	phoneChanged,
	verifyPhone,
	phoneCodeChanged,
	confirmPhoneCode,
	setUser,
	resetAuthState
})(PhoneVerify);
