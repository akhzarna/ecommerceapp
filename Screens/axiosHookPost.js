import { useEffect, useState } from 'react';

import { StyleSheet, Text, View, Button, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const useAxiosPost= axiosParams => {
    axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data:{
        "userId": 101,
        "id": 101,
      "title": "From Me",
      "body": "Posted here"
      },
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log("error", error)
    })
    return <View style={{flex:1}}>
  
       
    <FlatList
      data={data}
      renderItem={({item})=>
      (
        <View style={{padding: 30, borderWidth: 4, borderColor: 'blue'}}>
        <Text style={{fontSize: 20, color:'black'}}>{item.id}:  {item.title}</Text>
        </View>
       
        )
      } 
    />
  </View>
//return{loader,data,error,ApiCall};
}