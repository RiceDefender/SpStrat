import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { NavigationContainer, StackRouter, createNati } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SprintScreen from './Sprint.jsx';
import AirPortFlights from './Air.jsx';


function HomeScreen({navigation}){
    return(
      <View style={{ justifyContent:"center",backgroundColor: '#aaa', flex: 1, }}>

            
        <Text style={{alignItems:"center",}}>Home</Text>
        <Pressable onPress={() => navigation.navigate('Sprint')} style={{ borderColor:'rgba(0,0,0,1)', borderWidth: 1, padding: 15, marginTop: 25, borderRadius: 10,alignItems:"center",}}>
          <Text>Go to Sprint</Text>
          </Pressable>
        <Pressable onPress={() => navigation.navigate('Air')} style={{ borderColor:'rgba(0,0,0,1)', borderWidth: 1, padding: 15, marginTop: 25, borderRadius: 10, alignItems:"center",}}>
          <Text>Go to Airport flights</Text>
          </Pressable>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aaa',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: 'flex-start',
      backgroundColor: '#bbb',
      margin: 20,
      alignItems: 'center',
    },
    sidebutton: {
      flexDirection: 'row',
      padding: 5,
    },
    picture: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    bmibar: {
      alignItems: 'flex-start'
    }
  });

  export default HomeScreen;