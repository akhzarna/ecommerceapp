import React from 'react';
import {useState} from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Hi',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Salam',
  },
  
];
const Data2=[
    {   id: 1,
        Newmessage:"hello"

    }
]
const App4= async (Data) => {
  try {
    await AsyncStorage.setItem(
    Data);
  } catch (error) {
    // Error saving data
  }
};


const Item = ({ title }) => (
  <View >
    <Text style={{marginTop:20,marginBottom:10,backgroundColor:'blue',fontSize:25,width:200}}>{title}</Text>
    <Text style={{marginTop:20,marginBottom:10,backgroundColor:'green',fontSize:25,width:200,marginLeft:200}}>{title}</Text>
    
  </View>
);

const App = () => {
    const[text,setText]=useState('');
    const [Data2,setData]=useState([]);
    const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  
const MessageTransfer=() =>{
    setData([...Data2,{
        id:Data2.length,
        Newmessage:text
    }])
  




return }
  return (
    <SafeAreaView style={{backgroundColor:'gray'}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FlatList
        data={Data2}
        renderItem={(element)=>{
        return <Text style={{marginTop:20,marginBottom:5,backgroundColor:'blue',fontSize:25,width:200}}>{element.item.Newmessage}</Text>
        }}
      />
      
      <TextInput style={{width:300,backgroundColor:'yellow',
  }}onChangeText={newText => setText(newText)}></TextInput>
    <TouchableOpacity style={{width:90,}} onPress={MessageTransfer}>
        <Text style={{fontSize:20,color:'white',backgroundColor:'blue',marginTop:20,borderRadius:20,marginLeft:10}}>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;