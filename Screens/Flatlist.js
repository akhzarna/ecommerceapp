import React, { useState , useEffect} from "react";
import { StyleSheet, Text, View, Button, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import BookMark from "./BookMark";


  import {useAxiosFetch} from './axiosHookGet'



const Flatlist = ({navigation}) => {
 
  
    console.log(useAxiosFetch({method: 'GET', url: '/products'}));

    const{data, loader, error}= useAxiosFetch({method: 'GET', url: 'products'});
  
  

   
  
  if(loader){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="black"/>
      </View>
    );
   }
   

  
   if(error)
   {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'red'}}>{error}</Text>
    </View>
    )
  
   }
  
    return( 
    
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {Array(100)
          .fill()
          .map((_, i) => {
            return (
              <View style={{ width: '50%' }}>
                <View style={{flex:1}}>
    
        
    <FlatList
      
      data={data}
      renderItem={({item})=>
      (
        <View style={{padding: 30, borderWidth: 4, borderColor: 'grey', alignItems: 'center', justifyContent: 'center'}}>
        <Image source= {{uri:item.image}} style={{width:210, height:290, borderWidth:2,borderColor:'black', resizeMode:'contain', margin:8}}></Image>
        <Text style={{fontSize: 20, color:'black'}}>{item.title}</Text>
        <Text style={{fontSize: 20, color:'green',borderColor:'green'}}>PRICE = {item.price} - $</Text>
        <Text style={{fontSize: 20, color:'black'}}>{item.description}</Text>
        <Text style={{fontSize: 20, color:'red'}}>{item.category}</Text>
        </View>
      
        )
      } 
    />
  </View>

            </View>
          );
        })}
    </View>

    )
     
  };

export default Flatlist;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})