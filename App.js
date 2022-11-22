// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Home from './screens/Home';

// export default function App() {
//   return (
//     <>
//       <Home />
//       <StatusBar style="auto" />
//     </>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './screens/Home';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}>
      <Stack.Screen name="ShopNow" component={Home} options={{ title: 'Shop Now'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}