import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

let nextId = 0;

export default function Welcome({ navigation }) {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5 }}>
        <Image
          style={{ width: 180, height: 159 }}
          source={require("./assets/logo.png")}
        />
      </View>

      <TouchableOpacity
        style={{
          borderRadius: 10,
          backgroundColor: "pink",
          width: 100,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("List")}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Products</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#25a9e2",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});
