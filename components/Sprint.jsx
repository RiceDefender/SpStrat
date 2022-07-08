import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, StackRouter, createNati } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pedometer } from 'expo-sensors';
import HomeScreen from './Home.jsx';

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryArea } from 'victory-native';



function SprintScreen() {
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const [dataarray, setDataarray]= useState([]);

  useEffect(()=>{
    setDataarray(array => [...array, currentStepCount])

  }, [currentStepCount] )

  const _subscribe = () => {
    subscription = Pedometer.watchStepCount(result => {
      setCurrentStepCount(result.steps);
      
    });
    

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        setPastStepCount(result.steps);
      },
      error => {
        setPastStepCount('Could not get stepCount: ' + error);
      }
    );
  };

  const _unsubscribe = () => {
    // this.subscription && this.subscription.remove();
    // this.subscription = null;
  };


  useEffect(()=>{
    _subscribe();
    return ()=> _unsubscribe();
  },[])

  return (

    <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: '#aaa', flex: 1, }}>
      <Text>You walked: {pastStepCount} steps in the last 24 hours</Text>
      <Text>CONGRATS YOU'VE WALKED GORGEOUS: {currentStepCount} STEPS</Text>

          <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryArea
            style={{ data: { fill: "#c43a31" } }}
            data={dataarray}
          />
        </VictoryChart>

    </View>
  );


}
export default SprintScreen;