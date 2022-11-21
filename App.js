import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  Pressable,
  ToastAndroid,
  Switch,
} from "react-native";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [data] = useFetch("https://fakestoreapi.com/products");
  console.log(data);

  const renderItem = ({ item }) => (
    <Item title={item.title} image={{ uri: item.image }} price={item.price} />
  );

  const Item = ({ title, price, image }) => (
    <View style={styles.itemContainer}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Image style={styles.image} source={image} />
      <Text style={styles.sectionList}>{title}</Text>
      <Text style={(styles.sectionList, { color: "red", fontSize: 30 })}>
        Price: {price}$
      </Text>
      <Pressable
        onPress={() =>
          ToastAndroid.show("BUY NOW! Button Pressed", ToastAndroid.SHORT)
        }
        android_ripple={{ color: "#ffffff", borderRadius: 10 }}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>BUY NOW!</Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sectionList: {
    color: "#003433",
    fontSize: 20,
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: 400,
    resizeMode: "center",
    marginBottom: 20,
  },
  itemContainer: {
    margin: 30,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "red",
    padding: 20,
    alignItems: "center",
  },
  button: {
    width: 250,
    height: 40,
    border: 2,
    margin: 10,
    color: "#ffffff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4B2980",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
