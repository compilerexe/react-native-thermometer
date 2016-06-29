/**
 * This is React Native Thermometer.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class ReactNativeThermometer extends Component {
    render() {
      return (
        <Text>Hello World.</Text>
      );
    }
}

AppRegistry.registerComponent('ReactNativeThermometer', () => ReactNativeThermometer);
