import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image, ScrollView } from 'react-native';

import { AsyncStorage } from 'react-native';
import { useEffect,useState } from 'react';


export default function Bookmark({props}) {
    
    

    useEffect(()=>{
        _storeData = async () => {
            try {
              await AsyncStorage.setItem(
                props
              );
            } catch (error) {
              // Error saving data
            }
          };
    },[])
    
  return (
   <View style={{backgroundColor:'grey'}}>
 <FlatList
            data={(props)}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={
                ({item}) => (
<View style={{backgroundColor:'white', margin:10, height:300,width:180,borderRadius:10, elevation:2,alignItems:'center' }}>
<Image source={{uri:item.c}} style={{height:100,width:100}} />
                    <Text style={{fontSize:20, color:'black',margin:10}}> {item.a}</Text>
                    <Text style={{fontSize:20, color:'black',margin:10}}>  ${item.b}</Text>
                    <Text style={{fontSize:20, color:'red',margin:10}}>  Buy Now</Text>
                </View>

                
                )
                }
            
        />     
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',
  },
});