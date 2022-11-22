import React, { useState , useEffect} from "react";
import { StyleSheet, Text, View, Button, FlatList, ActivityIndicator, Image } from 'react-native';
import {useAxiosFetch} from './axiosHookGet'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Bookmarked } from './Screens/Bookmarked';


const Flatlist = ({navigation}) => {
 
  
    console.log(useAxiosFetch({method: 'GET', url: 'https://fakestoreapi.com/products'}));
    const{data, loader, error}= useAxiosFetch({method: 'GET', url: 'https://fakestoreapi.com/products'});

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
  
    return <View style={{flex:1}}>
  
       
        <FlatList
        numColumns={2}
          data={data}
          renderItem={({item})=>
          (
            
            <View style={{padding: 30, borderWidth: 1, borderColor: 'red', alignItems: 'center', justifyContent: 'center',flex: 0.5}}>
            <Icon.Button
              name="heart"
              onPress={() => alert('Added in favorites')}>
            </Icon.Button>
            <Image source= {{uri:item.image}} style={{width:200, height:300, borderWidth:2, resizeMode:'contain', margin:8}}></Image>
            <Text style={{fontSize: 20, color:'black'}}>{item.title}</Text>
            <Text style={{fontSize: 20, color:'black'}}>$ {item.price}</Text>
            <Button title='BookMark' style = {styles.button} onPress={()=>navigation.navigate(Bookmarked)}></Button>
            
            </View>
           
            )
          } 
        />
      </View>
     
  };

export default Flatlist;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
})