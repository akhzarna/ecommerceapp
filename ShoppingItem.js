import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {HeartSwitch} from '@anatoliygatt/heart-switch';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
const Item=(props)=> {
    const [check,setCheck]=useState(false);
  return (


    <View style={styles.container}>
        <View style={{backgroundColor:"white"}}>
        <View style={{justifyContent:"flex-end"}}>
            <TouchableOpacity onPress={(value)=>setCheck(!value)}>
                <Image
                        style={{height:25,width:23,margin: 3}}
                        
                        source={require('./assets/heart1.png')}
        />
            </TouchableOpacity>
        </View>
        
        <Image
                        style={{height:150,width:130,margin:20}}
                        source={{
                        uri: props.image,
                        }}
        />
        <Text>{props.name}</Text>              
        <Text style={{color:"blue"}}>$ {props.price}</Text>              
        <Text>Buy Now</Text>    
        </View>
        
        
        
        

        
        
                  
      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    alignItems: "center",
    justifyContent: "center",
  },
 
  
});

export default Item;