import React from 'react';
import { AsyncStorage } from 'react-native';
import {useState,useEffect} from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import App4 from "./App4.js";


export default function App() {

const [Data,setData]=useState([]);
const a_storeData = async () => {
  try {
    await AsyncStorage.setItem(
    Data);
  } catch (error) {
    // Error saving data
  }
};


  const getData = async () => {
    try {
     const response = await fetch('https://fakestoreapi.com/products');
     const json = await response.json();
    // console.log(json)
     setData(json); 
   } catch (error) {
     console.error(error);
   } finally {
   }
 }

 useEffect(() => {
   getData();
   //storring data in db
   a_storeData(Data);

 
 }, []);
 //USING CUSTOM HOOK SAVED DATA IN DATABASE
 //just adding this comment for git task
 App4(Data);
  return (
   
   <>
   <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
<View>


<Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
<FlatList
        data={Data}
        renderItem={(element)=>{
        return <>
        <View style={{backgroundColor:'grey',width:130,height:300,borderRadius:25,marginBottom:10,flexDirection:'column'}}>
<View style={{marginLeft:20}}>

<Image source={{uri:element.item.image}} style={{ width: 100, height: 100 }} />
</View>
<Text style={{color:'#FFB6C1',marginTop:10}}>{element.item.title}</Text>
<Text style={{color:'#ADD8E6'}}>${element.item.price}</Text>
<Text style={{}}>Buy Now</Text>
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
