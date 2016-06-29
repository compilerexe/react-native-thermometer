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

let thermo = require("./thermometer.png");

class ReactNativeThermometer extends Component {

    constructor(props) {
      super(props);
      this.state = {
        temp: 0,
        height: 405,
        marginTop: 0,
        color: 'cornflowerblue'
      }
    }

    componentDidMount() {
      // setInterval(() => {
      //   this.setTemp((Math.random()*100%100).toFixed(2));
      // }, 500);
      this.setTemp(100);

    }

    setTemp(c) {
      let resultHeightPx = (405 * c) / 100;
      let resultMarginTop = 405 - resultHeightPx + 30;
      this.setState({temp: c, height: resultHeightPx, marginTop: resultMarginTop});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentLeft}>
                    <Image source={ thermo } style={styles.thermo}>
                        <View style={[styles.heightTemp, {marginTop: this.state.marginTop}, {height: this.state.height}]}></View>
                        <View style={styles.defaultTemp}></View>
                    </Image>
                </View>
                <View style={styles.contentRight}>
                    <Text style={styles.dataTemp}>{this.state.temp} C</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'mistyrose',
        // borderColor: 'red',
        // borderWidth: 4
    },
    contentLeft: {
        // flex: 1,
        // borderColor: 'blue',
        // borderWidth: 4
        marginLeft: 30
    },
    contentRight: {
        flex: 1,
        alignItems: 'center',
        // borderColor: 'green',
        // borderWidth: 4
    },
    thermo: {

    },
    dataTemp: {
        fontSize: 80,
        fontWeight: '100'
        // borderColor: 'green',
        // borderWidth: 4
    },
    heightTemp: {
        // marginTop: 30,
        marginLeft: 45,
        // borderColor: 'yellow',
        // borderWidth: 3,
        // height: 375,
        width: 20,
        backgroundColor: 'cornflowerblue',
        position: 'absolute',
        borderRadius: 10
    },
    defaultTemp: {
        // flex: 1,
        borderColor: 'cornflowerblue',
        borderWidth: 4,
        marginTop: 424,
        marginLeft: 33,
        width: 44,
        height: 44,
        borderRadius: 50,
        backgroundColor: 'cornflowerblue'
    }
});

AppRegistry.registerComponent('ReactNativeThermometer', () => ReactNativeThermometer);
