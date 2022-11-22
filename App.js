import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home';
import newScreen from './bookmarks'


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
 
    <Stack.Navigator>
      
    
    <Stack.Screen name="Home Screen" component={HomeScreen} />
    <Stack.Screen name="Next Screen" component={newScreen} />
    

     
     

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
