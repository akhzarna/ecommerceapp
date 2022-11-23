import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './home';
import bookmark from './bookmark';
import { useEffect,useState } from 'react';

export default function App() {
  const Stack = createNativeStackNavigator();
  useEffect(()=>{
    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem(data);
          if (value !== null) {
            
           data = value;
          }
        } catch (error) {
          // Error retrieving data
        }
      };
},[])
  return (
    <NavigationContainer>
            <Stack.Navigator> 
            
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="bookmark" component={bookmark}></Stack.Screen>
                
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