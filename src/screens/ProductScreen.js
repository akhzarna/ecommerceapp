import {
  StyleSheet,
  Image,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import DataFetch from "../components/DataFetch";
import { React, useState, useEffect } from "react";
import Button from "../components/Button";
import Product from "../components/Producst";
const ProductScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View>
      <DataFetch setData={setData} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ height: windowHeight, width: windowWidth }}
        numColumns={1}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Product product={item} />}
      />
    </View>
  );
};
export default ProductScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
});
