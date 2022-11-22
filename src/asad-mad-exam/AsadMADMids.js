import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import useApi from "./useApi";

// import { apiResponse } from "./api-respone";
const AsadMADMids = ({ navigation }) => {
  const [change, setChange] = useState(false);
  const [apiResponse] = useApi("https://fakestoreapi.com/products");
  const onBookmark = (index, itemId) => {
    if (apiResponse[index].bookmark)
      apiResponse[index].bookmark = !apiResponse[index].bookmark;
    else apiResponse[index].bookmark = true;
    // console.log(apiResponse[index]);
    setChange(!change);
  };
  return (
    <View style={styles.body}>
      <FlatList
        data={apiResponse}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <View style={styles.image_icon}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <TouchableOpacity
                style={[styles.icon, item.bookmark ? styles.bookmarked : ""]}
                onPress={() => onBookmark(index, item.id)}
              ></TouchableOpacity>
            </View>
            <Text>{item.title}</Text>
            <Text>Buy Now</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("BookMarks", apiResponse);
        }}
      >
        <Text>Bookmarked</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AsadMADMids;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 10,
  },
  card: {
    backgroundColor: "whitesmoke",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    width: 150,
  },
  text: {
    color: "black",
  },
  image_icon: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 150,
    margin: 20,
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    borderWidth: 1,
    position: "absolute",
    right: 5,
    // top: 10,
    // margin: 7,
    padding: 10,
    borderRadius: 50,
    borderColor: "red",
    backgroundColor: "transparent",
  },
  bookmarked: {
    backgroundColor: "red",
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 5,
    width: 100,
    padding: 10,
    backgroundColor: "blue",
    // position: "fixed",
    // bottom: 5,
    alignSelf: "center",
  },
});

function productCard() {}

// demo
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// const AsadMADMids = () => {
//   return (
//     <View>
//       <Text>Components</Text>
//     </View>
//   );
// };
// export default MainScreen;
// const styles = StyleSheet.create({});
