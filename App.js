import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'
import UploadProduct from './UploadProduct';
//import UploadProduct from './UploadProduct';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="UploadProduct" component={UploadProduct} options={{ title: 'Bookmarks' }} />

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
