

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ImageBackground,
  Keyboard,
  FlatList,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import MySectionList from "./MySectionList";
import comsats from "../assets/COMSATs.jpg";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function ThisisSectionlist({navigation}) {
  <View style={styles.container}>
    <MySectionList> </MySectionList>
</View>
    
    

      

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
});
