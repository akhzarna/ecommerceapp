import react,{useEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,} from 'react-native';
import FlatListComp from './FlatList.js'
import useFetch from './CustomeHook'
import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@Data', JSON.stringify(data))
  } catch (e) {
    
  }
}


const getData = async () => {
  let returnData;
  try {

    const value = await AsyncStorage.getItem('@storage_Key')
    returnData=value
    
    
  } catch(e) {
   console.log(e);
  }
  return returnData
}

 
export default function App() {
  
  const [ApiData,setApiData]=useState()
  
  const asyncStorage=getData();

  if(asyncStorage!=null){
    setApiData(asyncStorage)
  }
  else{
    const [data] = useFetch("https://fakestoreapi.com/products");
    storeData(data);
    setApiData(data)
  }

  
    return (
    <View style={styles.container}>

      <Text style={{fontSize:20,fontFamily:"500"}}>Products</Text>
      
      <FlatListComp Data={ApiData}/>    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'lightblue'
  },
 
});
