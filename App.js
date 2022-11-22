
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Bookmark from './screens/Bookmark';
import Home from './screens/Home';
import FavouritesContextProvider from './favourite-context';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <FavouritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='bookmark' component={Bookmark} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavouritesContextProvider>







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
