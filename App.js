import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, StackRouter, createNati } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function HomeScreen({navigation}){
  return(
    <View style={{alignItems:"center", justifyContent:"center"}}>
          
      <Text>HomeScreen</Text>
      <Button title="Go to Sprint" onPress={() => navigation.navigate('Sprint')} />
      <Button title="Go to Airport flights" onPress={() => navigation.navigate('Air')} />
    </View>
  );
}

function SprintScreen({navigation}){
  return(
    <View style={{alignItems:"center", justifyContent:"center"}}>
      <Text>Text Screen</Text>
      <Button title="Go back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function AirPortFlights({navigation}){
  return(
    <View style={{alignItems:"center", justifyContent:"center"}}>
    <Text>Text Screen</Text>
    <Button title="Go back" onPress={() => navigation.navigate('Home')} />
  </View>
  );
}

const Stack = createNativeStackNavigator();
//      <Stack.Screen name="Home" component={SprintScreen}/>
export default function App({ navigation}) {
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
