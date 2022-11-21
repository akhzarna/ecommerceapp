import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Entypo } from '@expo/vector-icons';
import useFetch from "./useFetch";

export default function App() {



  
  const [bookmark, setbookmark] = useState([])
  const [Products, setProducts] = useState([])
  
  const [loading, setLoading] = useState(true)

const [data] = useFetch("https://fakestoreapi.com/productss");

  const getProducts = async () => {
    try {
     const response = await fetch('(https://fakestoreapi.com/products)',
     {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'kDdDWMQkbZn6tNS70475YtPDk6ExX2C72eX(TnHAB=6B9)arTK'
       },
     }
     );
     const json = await response.json();
     console.log('Data is =',json.data)
     setProducts(json.data)
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
}


  return (
    <SafeAreaView style={styles.container}>
    {
      data.map(val => {
        if (val.price !== 0) {
          return (
            <View style={styles.card} key={val.id}>
              <View style={styles.icon} >
                <Entypo name="heart-outlined" size={24} color='black' onPress={() => { setbookmark(1) }} />
              </View>
              <Image
                style={styles.tinyLogo}
                source={{ uri: val.image }}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>


                <View >
                  <Text style={{ color: 'grey', marginTop: 8 }}>
                    {val.category}
                  </Text>

                </View>
                <View >
                  <Text style={{ color: 'blue', marginTop: 8 }}>
                    {val.price}
                  </Text>

                </View>
               
              </View>
            </View>
          );

        }

      })
    }




  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
