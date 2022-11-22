import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MidTermMAD from "./src/mid-term-mad/MidTermMAD";

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app now!</Text> */}
    //   {/* <StatusBar style="auto" /> */}
    // </View>
    <MidTermMAD />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
