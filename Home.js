import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import React, { useEffect, useState } from "react";
import getData from "./hooks/getData";
import AsyncStorage from "@react-native-async-storage/async-storage";

//const DATA = [];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );
export default function HomeScreen({ navigation }) {
  const myuserdata = getData("https://fakestoreapi.com/products");
  global.check = [];
  const flag = false;

  useEffect(() => {}, []);

  useEffect(() => {
    // console.log("the data is ");
    // console.log(data);
  }, []); //data hoga bracket me
  // useEffect(() => {
  //   console.log(myuserdata);
  // }, [myuserdata]);

  const setBookmark = (id) => {
    console.log(id);
    const bookmark = JSON.stringify(id);
    AsyncStorage.setItem("data", bookmark);
    global.check[id.id] = true;
    console.log("the check is now complete");
    console.log(check);
  };
  const gotoBookmarks = () => {
    console.log("bookmark");
    navigation.navigate("Bookmark");
  };

  const renderItem = ({ item }) => (
    <View style={styles.list}>
      <TouchableOpacity onPress={() => setBookmark(item)}>
        <Image
          source={require("./images/circle.png")}
          style={{
            height: 15,
            width: 15,
            backgroundColor: "red", //[check[item.id] ? "red" : "gray"],
            borderRadius: 11,
          }}
        />
      </TouchableOpacity>
      <Image
        style={{ width: "100%", height: 200, borderRadius: 20, margin: 5 }}
        source={{
          uri: item.image,
        }}
      />
      <Text style={{ fontWeight: "bold", alignSelf: "center" }}>
        {item.title}
      </Text>
      <Text style={{ color: "blue", alignSelf: "center" }}>{item.price}</Text>
      <TouchableOpacity>
        <Text style={styles.buynow}>BUY NOW</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        data={myuserdata}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity onPress={gotoBookmarks}>
        <Text style={styles.bookmark}>BOOKMARKS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bookmark: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
    margin: 10,
    padding: 10,
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
  list: {
    flex: 1,
    padding: 10,
    margin: 10,
    width: "44%",
    borderRadius: 20,
    backgroundColor: "lightgrey",
  },
  buynow: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 15,
    color: "gray",
  },
});
