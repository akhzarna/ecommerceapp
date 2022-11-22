import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import BookMark from './BookMark.js';

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
    //     <Stack.Screen name="BookMark" component={BookMark} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View><text>Hello</text></View>
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
