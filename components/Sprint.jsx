import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, StackRouter, createNati } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pedometer } from 'expo-sensors';
import HomeScreen from './Home.jsx';


class Steps extends React.Component {
/*
  state = {
    isPedometerAvailable: 'checking',
    pstep: 0,
    cstep: 0,
  };
  componentDidMount() {
    this.subscribe();
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  subscribe = () => {
    const end = new Date();
    const start = new Date();
    this.subscription = Pedometer.watchStepCount(result => {
      this.setState({
        cstep: result.steps,
      });
    });

    start.setDate(end.getDate() - 1);
    subscription = Pedometer.watchStepCount(result => {
      this.setState({
        cstep: result.steps,
      });
    });



    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pstep: result.steps });
      },
      error => {
        this.setState({
          pstep: 'Could not get stepCount: ' + error,
        });
      }
    );

    unsubscribe = () => {
      this.subscription && this.subscription.remove();
      this.subscription = null;
    };
    
  }
  render(){
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Text Screen</Text>
        <Text>You walked: {this.state.pstep} steps in the last 24 hours</Text>
        <Text>CONGRATS YOU'VE WALKED GORGEOUS: {this.state.cstep} STEPS</Text>
      </View>
    );
  }
*/
  state = {
    isPedometerAvailable: 'checking',
    pastStepCount: 0,
    currentStepCount: 0,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps,
      });
    });


    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: 'Could not get stepCount: ' + error,
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>You walked: {this.state.pastStepCount} steps in the last 24 hours</Text>
        <Text>CONGRATS YOU'VE WALKED GORGEOUS: {this.state.currentStepCount} STEPS</Text>
      </View>
    );
  }
}







function SprintScreen({ navigation }) {


}
export default Steps;