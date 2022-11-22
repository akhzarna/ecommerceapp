import React, { useState , useEffect} from "react";
import { StyleSheet, Text, View, FlatList,
    ActivityIndicator, Image, TouchableOpacity } from 'react-native';
    import {Button, Input} from "react-native-elements";

const BookMark = ({navigation}) => {
 console.log(global.setting.var)

 return <View style={{flex:1}}>
  
       
 <FlatList
   numColumns={2}
   data={global.setting.var}
   renderItem={({item})=>
   (
     <View style={{padding: 30, borderWidth: 4, borderColor: 'grey', alignItems: 'center', justifyContent: 'center', flex: 0.60}}>
     
     <Image source= {{uri:item.image}} style={{width:200, height:290, borderWidth:2,borderColor:'black', resizeMode:'contain', margin:8}}></Image>
     <Text style={{fontSize: 20, color:'black', margin: 20}}>{data.title}</Text>
     <Text style={{fontSize: 20, color:'blue', margin: 20}}>PRICE = {item.price} /- RS</Text>
     </View>
     )
   } 
 />

</View>

};

export default BookMark;
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