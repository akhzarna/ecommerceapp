import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList
} from "react-native";
// import ProfileScreen from './ProfileScreen';


import React, { Component, useEffect, useState } from "react";

 import customapi from "./apiHook";
 
export default function NewHome({navigation}) {
    const [color,setColor]=useState("white");
    global.x='white';
     const mal=customapi("https://fakestoreapi.com/products")
const [data1,setData]=useState(null);
//const [data,setdta1]=useState([1,2,3,4,5])
    useEffect(()=>
    {
//          fetch('https://reactnative.dev/movies.json')
//         .then((response) => response.json())
//         .then((responseJson) => {
//             setData(responseJson.movies)
// })
                setData(mal)
    },[])
    useEffect(()=>
    {
        console.log(data1)
    },[data1])
 
    const renderItem = ({ item }) => (
        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 10,
            width: "44%",
            borderRadius: 20,
    
            backgroundColor: "black",
          }}
        >
          <TouchableOpacity
           onPress={()=>
          
                setColor("green")
            }
          
          >
            
            <Text
              style={{
                fontWeight: "bold",
                alignSelf: "center",
                fontSize: 15,
                color:color,
              }}
            >
              Bookmarks
            </Text>
          </TouchableOpacity>
          <Image
            style={{ width: "100%", height: 200, borderRadius: 20, margin: 5 }}
            source={{
              uri: item.image,
            }}
          />
          <Text style={{ fontWeight: "bold", alignSelf: "center" }}>
            {item.title}
          </Text>
          <Text style={{ color: "blue", alignSelf: "center" }}>{item.price}</Text>
          <TouchableOpacity
           
          
          >
            <Text
              style={{
                fontWeight: "bold",
                alignSelf: "center",
                fontSize: 15,
                color:'white',
              }}
            >
              BUY NOW
            </Text>
          </TouchableOpacity>
        </View>
      );
    
    return (
        
        <View style={{flex:1,backgroundColor:'white'}}>
        {/* {console.log(data1.category)}  */}
        
            <FlatList
                numColumns={2}
                data={data1}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity
            onPress={()=>navigation.navigate('Next Screen')

        }
            >
            
            <Text
              style={{
                fontWeight: "bold",
                alignSelf:'flex-end',
                fontSize: 25,
                color: "black",
                
              }}
            >
              Save Bookmarks
            </Text>
          </TouchableOpacity>
        </View>
       
    );
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFF5F5'

    },
    card: {
        padding: 12,
        paddingBottom: 18,
        borderRadius: 24,
        backgroundColor: 'white',
        width: '45%',
        margin: 8
    }
})

