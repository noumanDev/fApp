import React, { Component } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

class LocationPicker extends Component {
	render() {
		return (
			<View style={{ marginTop: 130 }}>
				<Text>Location picker</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
	return {};
};
export default connect(mapStateToProps, null)(LocationPicker);
