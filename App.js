import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ItemScreen from "./ItemScreen";

export default function App() {
  return <ItemScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
