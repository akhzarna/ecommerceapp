import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList ,SafeAreaView } from 'react-native';
import Home from './Home/Home'
export default function App() {
  

  return (
    <View style={styles.container}>

    <Home/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
