import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './home';
import Bookmark from './Bookmark';
import { useEffect,useState } from 'react';
const Stack = createNativeStackNavigator();
export default function App(props) {
  // const Stack = createNativeStackNavigator();
//   useEffect(()=>{
//     // _retrieveData = async () => {
//     //     try {
//     //       const value = await AsyncStorage.getItem(data);
//     //       if (value !== null) {
            
//     //        data = value;
//     //       }
//     //     } catch (error) {
//     //       // Error retrieving data
//     //     }
//     //   ;
// },[])
  return (
    <NavigationContainer>
            <Stack.Navigator> 
          
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Bookmark" component={Bookmark}></Stack.Screen>

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