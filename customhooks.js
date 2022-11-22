import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View,FlatList, Image } from "react-native";


export default customhooks=(props)=>{
  const[isLoading,setLoading]= useState(true);
  const[data,setData]=useState([]);
  console.log(data)

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, []);

  return data;
}
