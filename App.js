import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useGetApi from "./useGetApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const { data, setData, getData } = useGetApi(
    "https://fakestoreapi.com/products"
  );
  //const [data, setData] = useState([]);

  useEffect(() => {
    if (!dataExist()) getData();
    readData();
  }, []);

  useEffect(() => {
    if (!dataExist()) changeArray();
  }, [data]);

  async function setAsyncData(data) {
    console.log(JSON.stringify(data, null, 2));
    await AsyncStorage.setItem("data", JSON.stringify(data));
  }

  async function dataExist() {
    let get = await AsyncStorage.getItem("data");
    return get ? true : false;
  }

  function changeArray() {
    let newData = data.map((item) => {
      return {
        ...item,
        favourite: false,
      };
    });

    setAsyncData(newData);
  }

  async function readData() {
    let get = await AsyncStorage.getItem("data");
    if (get) {
      setData(JSON.parse(get));
    }
  }

  function handleFavourite(item) {
    let newArr = [...data];
    newArr.forEach((i) => {
      if (i.id === item.id) {
        i.favourite = !i.favourite;
      }
    });
    //console.log(JSON.stringify(newArr, null, 2));
    setData(newArr);
    setAsyncData(newArr);
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.FlatList}
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View
              style={{
                alignItems: "center",
                padding: 10,
                width: "100%",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <TouchableOpacity
                style={styles.icon}
                onPress={() => handleFavourite(item)}
              >
                {item.favourite ? (
                  <Image
                    source={require("./assets/fill.png")}
                    style={{ width: 30, height: 30 }}
                  />
                ) : (
                  <Image
                    source={require("./assets/heart.png")}
                    style={{ width: 30, height: 30 }}
                  />
                )}
              </TouchableOpacity>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={{ alignItems: "center" }}>
                <Text style={{ marginVertical: 5 }}>
                  {item.title.slice(0, 40)}
                </Text>
                <Text
                  style={{ marginVertical: 5, color: "blue", fontSize: 14 }}
                >
                  {item.price}
                </Text>
                <Text
                  style={{
                    marginVertical: 5,
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  Buy Now
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  FlatList: {
    width: "100%",
    backgroundColor: "lightgrey",
  },
  card: {
    width: "47.5%",
    height: 400,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: 10,
    marginHorizontal: 5,
    justifyContent: "space-between",
  },
  image: {
    marginTop: 10,
    width: "80%",
    height: "60%",
    marginBottom: 15,
  },
  icon: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 0,
    top: 0,
  },
});
