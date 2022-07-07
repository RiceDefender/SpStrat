import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button,TextInput, ScrollView } from 'react-native';
import { NavigationContainer, StackRouter, createNati } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home.jsx';
import axios from 'axios';

function AirPortFlights({navigation}){
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
      <View style={{alignItems:"center", justifyContent:"center"}}>
      <Text>Airport Flights</Text>
      <Text>Notice: Time intervall must not be longer than 7 Days</Text>
      <Text>Notice: Time must be given in Unix</Text>
      <TextInput value={airportname} onChangeText={setairportname} placeholder="Airport code in ICAO" />
      <TextInput value={timefrom} onChangeText={settimefrom} placeholder="Time from" keyboardType='numeric' />
      <TextInput value={timeto} onChangeText={settimeto} placeholder="Time to" keyboardType='numeric' />
      <Button title="Search" onPress={ getapidata} />
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