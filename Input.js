import React from 'react';
import { TextInput, Text, View } from 'react-native';
//secureTextEntry comes as undefined in email input in parent , 
//for jsx undefined go as false for booleans
const Input = ({ label, value, OnChangeText, placeholder, secureTextEntry, underlineColorAndroid }) => {  
    
const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
         <Text style={labelStyle}>{label}</Text>
         <TextInput 
         underlineColorAndroid={underlineColorAndroid}
         secureTextEntry={secureTextEntry}
         placeholder={placeholder}
         autoCorrect={false}
         style={inputStyle} 
         value={value}
         OnChangeText={OnChangeText} 
         />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }

};

export { Input };
