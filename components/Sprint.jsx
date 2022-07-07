import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, StackRouter, createNati } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pedometer } from 'expo-sensors';
import HomeScreen from './Home.jsx';

function SprintScreen({navigation}){
    return(
      <View style={{alignItems:"center", justifyContent:"center"}}>
        <Text>Text Screen</Text>
      </View>
    );
  }
  export default SprintScreen;