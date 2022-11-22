import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

import React, { Component, useEffect, useState } from 'react';

import  AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home(props) {
  const b = "hasnain";
  let dumpData = []
  



  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [color, setOlor] = useState([]);
  
  
  const storeData = async () => {
   
      try{
          AsyncStorage.setItem('Peoducts',JSON.stringify(products));
      }
      catch(error){
          console.log(error);
      }
    }
  const   displayData = async ()=>{
      try{
        let user = await AsyncStorage.getItem('Products');

        if(Products == null){
           getProducts();
         }
         
     
        setProducts(Products);

      }
      catch(error){
        console.log("error in async")
      }
    }

    
  const getProducts = async () => {
      try {
       const response = await fetch('https://fakestoreapi.com/products');
       const json = await response.json();

      setProducts(json);
       
          storeData(json);
     } catch (error) {
       console.error(error);
     } finally {
      
     }
   }
   function BookMark(){

   }


   
   useEffect(() => {


       displayData();
      getProducts();
     
      

     },[]);
      

return(
  <View style={{ top:30,flex:1,justifyContent:'center',allignItem:'center'}}>
 
    <View style={{justifyContent:'center',allignItem:'center'}} >
    <View  style={styles.container}>

        <View style={{justifyContent:'center',allignItem:'center'}}  > 
        <TouchableOpacity onPress={()=>props.navigation.navigate('BookMark',{product:products2})} >
                    <Text style = {{fontSize:20,fontWeight:'900',color:'orange',backgroundColor:'blue',padding:10,marginLeft:10,height:50,width:200}}>
                        BookMark Page

                    </Text>
                </TouchableOpacity>

        </View>
<View style={{justifyContent:'center',allignItem:'center'}} >
<FlatList
 numColumns={2}                  
 columnWrapperStyle={styles.row}  

 data={products}
 renderItem={({item}) =>

 <View style={{justifyContent:'center',allignItem:'center'}} >
  
     <Image source = {{uri:item.image}}
style={{fontSize  : 15,maxWidth : 100,width: 100,height: 100,}}
   
   />
 <Text style={{fontSize  : 15,maxWidth : 100,width: 100,height: 100,}}> {item.title}</Text>
 <Text style={{fontSize  : 15,maxWidth : 100,width: 100,height: 100,}}> $ {item.price}</Text>
 <TouchableOpacity onPress={()=>setOlor("red")} >
                    <Text style = {{fontSize:20,fontWeight:'900',color:'orange',backgroundColor:color,padding:5,marginLeft:10}}>
                        BookMark

                    </Text>
                </TouchableOpacity>
 </View>
 }
/>
</View>

      </View>
        </View>
        </View>
  )
}



const styles = StyleSheet.create({
  container: {

  },

  row: {
    flex: 1,
    
} ,
btn : {
   
    
    
} 
})