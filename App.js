import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NAME_USER } from "@env"

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-red-500">
      <Text className="text-center text-xl text-white">Open up {NAME_USER} to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}