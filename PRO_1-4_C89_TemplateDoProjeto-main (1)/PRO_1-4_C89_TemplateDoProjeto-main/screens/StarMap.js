import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Tela do mapa estelar!</Text>
                <TextInput
                style={Styles.inputStyle}
                placeholder="DIgite sua latitude"
                placeholderTextColor="white"
                onChangeText={(text)=>{
                    this.setState({
                        latitude: text
                    })
                }}
                />
                <TextInput
                style={Styles.inputStyle}
                placeholder="DIgite sua longitude"
                placeholderTextColor="white"
                onChangeText={(text)=>{
                    this.setState({
                        longitude: text
                    })
                }}
                />
            </View>
        )
    }
}