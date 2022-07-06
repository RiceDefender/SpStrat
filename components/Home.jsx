import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, StackRouter, createNati } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SprintScreen from './Sprint.jsx';
import AirPortFlights from './Air.jsx';


function HomeScreen({navigation}){
    return(
      <View style={{alignItems:"center", justifyContent:"center"}}>
            
        <Text>HomeScreen</Text>
        <Button title="Go to Sprint" onPress={() => navigation.navigate('Sprint')} />
        <Button title="Go to Airport flights" onPress={() => navigation.navigate('Air')} />
      </View>
    );
  }

  export default HomeScreen;