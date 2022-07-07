import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, StackRouter, createNati } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home.jsx';
import SprintScreen from './components/Sprint.jsx';
import AirPortFlights from './components/Air.jsx';


const Stack = createNativeStackNavigator();
//      <Stack.Screen name="Home" component={SprintScreen}/>
export default function App ({ navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Sprint" component={SprintScreen}/>
        <Stack.Screen name="Air" component={AirPortFlights}/>
      </Stack.Navigator>

            

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
