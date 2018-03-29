import React from 'react';
import { TextInput, View, Text,StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>label</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                autoCorrect={false}

            />
        </View>
    );
};

const styles =StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
lineHeight: 23,
        flex: 2,
        height:40,
        borderColor:'gray'


    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        height:40
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export { Input };