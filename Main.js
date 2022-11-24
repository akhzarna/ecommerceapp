import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import useFetch from "./FetchData";
import Item from "./ShoppingItem";
import useStore from "./SaveLocally";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function Main({navigation}) {

  const [data] = useFetch("https://fakestoreapi.com/products");

  const[dataStored]=useStore(data);

  

  return (
    <View style={styles.container}>
     <FlatList style={{flex:0.50,backgroundColor:"white"}}
              showsVerticalScrollIndicator={false}
              data={data}
              numColumns={2}
              keyExtractor= {item=>item.id}
              
              renderItem={
                  ({item}) => (
                  <TouchableOpacity style={{ backgroundColor:"red"}}>
                    
                    <Item image={item.image} name={item.category} price={item.price}></Item>                 
                  </TouchableOpacity>
                  )
                  }
              
          />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  
});