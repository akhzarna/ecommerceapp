import React, { useState, useEffect, component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import Flatlist from './Screens/Flatlist';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name = "Login" component={LoginScreen}/>
    <Stack.Screen name = "Register" component={RegisterScreen}/>
    <Stack.Screen name = "Flatlist" component={Flatlist}/>


    </Stack.Navigator>
  </NavigationContainer>
  );
}

