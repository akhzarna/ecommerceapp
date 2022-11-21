import React, { useState, useEffect } from "react";
import styles from "./HomeStyle";
import { View, Text, FlatList, Touchable, TouchableOpacity, Image } from "react-native";
import heart from "../../assets/heart.png";
import redHeart from "../../assets/redHeart.png";
import GetApiHook from "../Hooks/GetApiHook";
import { AsyncStorage } from "react-native";

function Home() {
  const [bookMark, setBookMark] = useState(false);
  const [itemData, setItemData] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ]);

  const { data, loading, error, getData } = GetApiHook();

  useEffect(() => {
    console.log("checking local storage: ", AsyncStorage.getItem("isDataStored"));
    if (AsyncStorage.getItem("isDataStored") == "yes") {
      setItemData(AsyncStorage.getItem("localData"));
      console.log("data comes from local storage");
    } else {
      console.log("data is loaded from server");
      getData("https://fakestoreapi.com/products");
    }
  }, []);

  useEffect(() => {
    setItemData(data);
    console.log("item data is:", itemData);
    AsyncStorage.setItem("localData", JSON.stringify(data));
    AsyncStorage.setItem("isDataStored", "yes");
  }, [data]);

  return (
    <View styles={styles.container}>
      <View>
        <FlatList
          style={styles.flatlist}
          showsVerticalScrollIndicator={false}
          data={itemData}
          numColumns={2}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#dce2e9",
            marginTop: 20,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                backgroundColor: "white",
                borderRadius: 10,
                width: "45%",
                minHeight: 300,
                padding: 15,
              }}
            >
              <View style={{ flex: 0.2, flexDirection: "row-reverse" }}>
                <TouchableOpacity
                  onPress={() => {
                    setBookMark(!bookMark);
                  }}
                >
                  <Image style={{ width: 20, height: 20 }} source={!bookMark ? heart : redHeart}></Image>
                </TouchableOpacity>
              </View>
              <Image style={{ width: "100%", height: 200, marginTop: 10 }} source={{ uri: item.image }}></Image>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ marginTop: 10, fontWeight: "300" }}>{item.title}</Text>
                <Text style={{ color: "#65a4ec", fontSize: 14, marginTop: 10 }}>$ {item.price}</Text>
                <Text style={{ fontSize: 14, fontWeight: "600", marginTop: 10 }}>BUY NOW</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

export default Home;
