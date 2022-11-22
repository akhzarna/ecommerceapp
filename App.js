import React, { useState, useEffect, component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Flatlist from './Screens/Flatlist';
// import { Bookmarked } from './Screens/Bookmarked';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name = "Main Tab" component={Flatlist}/>
    {/* <Stack.Screen name = "BookMarked Items" component={Bookmarked}/>  */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

