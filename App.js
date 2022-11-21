import { StatusBar } from "expo-status-bar";

import {
  Text,
  View,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import useFetch from "./useFetch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import styles from "./GlobalStyles";
import heart from "./assets/HeartIcon.png";

export default function App() {
  const [data] = useFetch("https://fakestoreapi.com/products");

  try {
    AsyncStorage.setItem("STOREdata", JSON.stringify(data));
  } catch (error) {}

var myArray

  try {
    myArray = AsyncStorage.getItem("STOREdata");
    if (myArray !== null) {
      console.log(JSON.parse(myArray));
    }
  } catch (error) {}

  return (
    <View style={styles.container}>
      <Text></Text>
      <FlatList
      keyExtractor={(myArray,item)=>item.toString()}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#dce2e9",
          marginTop: 20,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 10,
              backgroundColor: "#ffff",
              borderRadius: 10,
              width: "45%",
              minHeight: 300,
              padding: 15,
            }}
          >

            <TouchableOpacity
              style={{ flex: 0.2, flexDirection: "row-reverse" }}
              onPress = {()=>{Alert.alert("Favorites","Item Added to your favorites.",[
                {text:'OK'}
              ])}}
            >
              <Image style={{ width: 40, height: 25 }} source={heart}></Image>
            </TouchableOpacity>
            <Image style={{ width: "100%", height: 200, marginTop: 10 }} source={{ uri: item.image }}></Image>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ marginTop: 10, fontWeight: "300" }}>
                {item.title}
              </Text>
              <Text style={{ color: "#65a4ec", fontSize: 14, marginTop: 10 }}>
                $ {item.price}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "600", marginTop: 10 }}>
                BUY NOW
              </Text>
            </View>
          </View>
          
        )}
      />
      
    </View>
  );
}
