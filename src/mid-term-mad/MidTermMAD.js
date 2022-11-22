import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";
import AsadMADMids from "../asad-mad-exam/AsadMADMids";
import BookMarks from "../asad-mad-exam/BookMarks";

const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator();

export default function MidTermMAD() {
  return (
    // <View style={styles.body}>

    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AsadMADMids"
          component={AsadMADMids}
          options={{ title: "Main Screen" }}
        />
        <Stack.Screen
          name="BookMarks"
          component={BookMarks}
          options={{ title: "BookMarks" }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ title: "Sign In" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, justifyContent: "center", alignItems: "center" },
});
