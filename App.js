import React from 'react';
import {useState,useEffect} from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import useCustomHook from './useCustomHook'
export default function App() {

const [Data,setData]=useState([]);

  const getDataFromApi = async () => {
    try {
     const response = await fetch('https://fakestoreapi.com/products');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
   }
 }

 useEffect(() => {
   getDataFromApi();
 }, []);
 
const a_storeData = async () => {
  try {
    await AsyncStorage.setItem(
    Data);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  const a_storeData = async () => {
    try {
      await AsyncStorage.setItem(
      Data);
    } catch (error) {
      // Error saving data
    }
  };
}, []);
  return (
   
   <>
   <View style={styles.container}>
      <Text style={{backgroundColor:'blue'}}>E-Commerse App</Text>
      <StatusBar style="auto" />
    </View>
<View>
<FlatList
        data={Data}
        renderItem={(element)=>{
        return <>
<View style={{alignItems:"center", backgroundColor:'pink'}}>
<Image source={{uri:element.item.image}} style={{ width: 80, height: 80, borderRadius: 40 }} />
<Text style={{marginTop:15}}>{element.item.title}</Text>
<Text style={{color:"red"}}>${element.item.price}</Text>
<Text style={{}}>Please click to purchase</Text>
</View>

        </>        }}
      />



</View>
</>
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