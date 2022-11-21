

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
  Image,SafeAreaView
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import comsats from "../assets/COMSATs.jpg";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import useFetch from "./APIcustomhook";
export default function Home() {

  const [apidata] = useFetch("https://fakestoreapi.com/products");
  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} price={item.price} />
  );
  const Item = ({ title, price, image }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{uri:image}} />
      <Text style={styles.sectionList}>{title}</Text>
      <Text style={styles.Price}> ${price}</Text>
      <Pressable
        onPress={() =>
          Alert.alert("Buy button pressed")
        }
       
        style={styles.button}
      >
        <Text style={styles.buttonText}>BUY NOW!</Text>
      </Pressable>
    </View>
  );
  var localStorage = require('react-native-local-storage');
  useEffect(() => {
    localStorage.save('dataKey', JSON.stringify(apidata));
  }, [apidata]);
return(
  <SafeAreaView>
  <FlatList
    data={apidata}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />
</SafeAreaView>
);
}
const styles = StyleSheet.create({
sectionList: {
color: "black",
fontSize: 25,
textAlign: "center",
},
Price:{
color:"blue",
fontSize:20
},
image: {
width: "100%",
height: 150,
resizeMode: "center",
},
itemContainer: {
margin: 30,
borderWidth: 5,
borderRadius: 30,
borderColor: "white",
padding: 30,
alignItems: "center",
backgroundColor: "white",
},
button: {
width: 250,
height: 40,
border: 5,
margin: 10,
color: "white",
borderRadius: 30,
justifyContent: "center",
alignItems: "center",
backgroundColor: "lightgray",
},
buttonText: {
fontWeight: "bold",
fontSize: 20,
color: "black",
},
});