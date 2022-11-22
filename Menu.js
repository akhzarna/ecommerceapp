import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View,FlatList, Image } from "react-native";
import 'localstorage-polyfill';
import customhooks from "./customhooks";

export default Menu=(props)=>{
  const[isLoading,setLoading]= useState(true);
  const[data,setData]=useState([]);
  console.log(data)

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, []);

  useEffect(()=>{
  localStorage.setItem('data',JSON.stringify(data));
  console.log(data);
 },[data]);

  return (

    <View style={{ flex: 1, padding: 24 ,justifyContent:'center',alignItems:'center'}}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:'center',alignItems:'center'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center'}}>Products:</Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column', justifyContent:'center',alignItems:'center'}}>
                <Text>
                {item.id +'. ' +item.category }
                </Text>
                <Image
                style={{width:100,height:140}}
                source={{uri:item.image}}
                />
              <Text style={{textAlign: 'center'}}>{'Name: ' + item.title +'\n'+'Price: $'+item.price +'\n'+'BUY NOW'+'\n'}</Text>
              
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};
  

