import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image,FlatList,StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState,useEffect } from 'react';
import 'localstorage-polyfill';
import useFetch from './FetchReq';
export default function App() {
  const [data] = useFetch("https://fakestoreapi.com/products");
  const [colorIcon,setColorIcon]=useState('black');
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
    console.log(data);
  }, [data]);
  return (
    
    <View style={styles.container}>
      {console.log(data)}
      <FlatList
        data={data}
        keyExtractor={({id},index) => id}
        renderItem={({ item }) => ( 
          <View style={{marginTop:10, borderStyle: 'solid'}}>
          <TouchableOpacity
          onPress={() => setColorIcon=='grey'}
          >
          </TouchableOpacity>
          <Image
          style={{width:200,height:200,alignSelf:'center'}}
          source={{uri: item.image}}
          >
          </Image>
          <Text style={{alignSelf:'center'}}>{item.title}</Text>
          <Text style={{alignSelf:'center'}}>$ {item.price}</Text>
          <Text style={{alignSelf:'center'}}>Buy Now!</Text>
          {/* <Text> {item.id + '. ' + item.category }, {'Name: '+ item.title},{'USD: '+ item.price}</Text> */}
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
});
