import React, { useEffect, useState } from "react";
import CustomHooksApi from "./CustomHooksApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

function ItemScreen(props) {
  const response = CustomHooksApi("https://fakestoreapi.com/products");

  return (
    <ScrollView>
      <FlatList
        data={response}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={styles.mainView}>
            <Image
              source={{ uri: item.image }}
              style={{ height: 100, width: 100 }}
            ></Image>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
            <Text>Buy Now</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
  },
});
export default ItemScreen;
