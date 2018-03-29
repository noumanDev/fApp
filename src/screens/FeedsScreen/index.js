import React, {Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'react-native-firebase';

class FeedsScreen extends Component{
    state ={}
    componentDidMount() {
        // firebase things?
        firebase.auth().signInWithPhoneNumber('+923425289404')
        .then(confirmResult=>console.log(confirmResult))
        .catch(error=>console.log(error));
      }
    render(){
   return(    <View><Text>hello</Text></View>);
    }

}
export default FeedsScreen;