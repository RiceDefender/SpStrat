import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Linking, StyleSheet, Text, View, Button,TextInput, ScrollView, Pressable } from 'react-native';
import { NavigationContainer, StackRouter, createNati } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home.jsx';
import axios from 'axios';

function AirPortFlights(){
    const [apidata, setapidata] = useState([]);
    const [timefrom, settimefrom] = useState();
    const [timeto, settimeto] = useState();
    const [airportname, setairportname] = useState();
    const [debug, setdebug] = useState();

    const getapidata = async () => {
      try {
        setdebug("https://opensky-network.org/api/flights/arrival?airport="+ airportname +"&begin="+timefrom+"&end="+ timeto)
        axios.get("https://opensky-network.org/api/flights/arrival?airport="+ airportname +"&begin="+timefrom+"&end="+ timeto)
        //"https://opensky-network.org/api/flights", {params: {airport: airportname, begin: settimefrom, end: settimeto}}
          .then((response) => {
            setapidata(response.data)
            console.log(response.data)
          });
      } catch {
        console.log("ERROR")
      }
    }
    return(
      <View style={{alignItems:"center", justifyContent:"center", backgroundColor: '#aaa', flex: 1, }}>
      <Text>Airport Flights</Text>
      <Text>Notice: Time intervall must not be longer than 7 Days</Text>
      <Text>Notice: Time must be given in Unixtimestamp</Text>
      <Text>For more info visit the hyperlink below: </Text>
      <Text onPress={()=> Linking.openURL('https://openskynetwork.github.io/opensky-api/rest.html#arrivals-by-airport')}>OpenSky API</Text>
      <TextInput value={airportname} onChangeText={setairportname} placeholder="Airport code in ICAO" />
      <TextInput value={timefrom} onChangeText={settimefrom} placeholder="Time from" keyboardType='numeric' />
      <TextInput value={timeto} onChangeText={settimeto} placeholder="Time to" keyboardType='numeric' />
      <Text>Request: {debug}</Text>
      <Pressable onPress={getapidata} style={{ borderColor:'rgba(0,0,0,1)', borderWidth: 1, padding: 15, marginTop: 25, borderRadius: 10, alignItems:"center",}}>
          <Text>Search</Text>
          </Pressable>
      <ScrollView>
      {
        apidata.map((obj, index)=> {
            return <Text key={index}>{obj.callsign}</Text>
        })
      }
      </ScrollView>
    </View>
    );
  }
  //<Text>{apidata[0]?.callsign}</Text>
//      {apidata.map(({icao24, callsign})=>(<Text key={icao24}>TEXT {icao}</Text>))}
  export default AirPortFlights;