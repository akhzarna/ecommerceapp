import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import {  DefaultTheme , DarkTheme } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';


import Screen2 from './script/Screen2.js';
import Screen3 from './script/Screen3.js';
import Home from './Home.js';


const Stack = createStackNavigator();



export default function App(props) {


  return (
    <NavigationContainer>
      <Stack.Navigator >

        <Stack.Screen name="Home" component={Home}  />
 
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}