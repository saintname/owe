import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

export default class Weather extends React.Component {
    render() {
        const {main, description, temp} = this.props;

        return (
            <View>
                <Text> {main} </Text>
                <Text> {description} </Text>
                <Text> {temp} </Text>
            </View>
        );
    }
}