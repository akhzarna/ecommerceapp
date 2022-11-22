import React, { Component, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Button from "./Button";
import Ionicons from "@expo/vector-icons/Ionicons";
const windowWidth = Dimensions.get("window").width;

// const windowHeight = Dimensions.get("window").height;

const Product = (props) => {
  const { title, price, image } = props.product;
  const [estado, setEstado] = useState(false);

  const agregarFavoritos = () => {
    setEstado(!estado);
  };

  return (
    <View
      style={{
        width: windowWidth,
        borderWidth: 0.75,
        alignItems: "center",
        width: "90%",
        borderRadius: 8,
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: "center",
        borderColor: "pink",
      }}
    >
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.text}> {title} </Text>
      <Text style={styles.price}>Price: {price} $ </Text>
      <Button
        onPress={() => {
          agregarFavoritos();
          navigation.navigate("Bookmarked");
        }}
        mode={"outlined"}
      >
        Boookmark
      </Button>
      <TouchableOpacity onPress={() => agregarFavoritos()}>
        <Ionicons
          name={estado ? "md-heart" : "heart-outline"}
          size={20}
          color="red"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    justifyContent: "center",
    height: 150,
    width: 120,
    // marginRight: 20,
    // marginLeft: 20,
  },
  text: {
    flex: 1,
    alignSelf: "center",
    fontSize: 8,
    fontWeight: "bold",
    color: "black",
  },
  price: {
    flex: 1,
    alignSelf: "center",
    fontSize: 10,
    color: "blue",
  },
});
