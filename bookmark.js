import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image, ScrollView,TouchableOpacity } from 'react-native';
import CustomApiHook from './CustomApiHook';
import { AsyncStorage } from 'react-native';
import { useEffect,useState } from 'react';


export default function bookmark(props) {
  console.log("Hello I am bookmarked",props)
  const [data, setData] = useState(books);
    

    useEffect(()=>{
        
    },[])
    
  return (
    
    <View style={{flex:1,}}>
    <View style={{flex:90,}}>
<FlatList 
            data={(data)}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={
                ({item}) => (
<View style={{backgroundColor:'#E9E5E5', margin:10, height:300,width:180,borderRadius:10, elevation:2,alignItems:'center' }}>
<Image source={{uri:item.image}} style={{height:100,width:100,marginTop:20}} />
                    
                    <Text style={{fontSize:16,margin:10}}> {item.title}</Text>
                    <Text style={{fontSize:18,margin:10,fontWeight:'bold'}}>  ${item.price}</Text>
                    <Text style={{fontSize:18,margin:10,fontWeight:'bold'}}>  Buy here</Text>
                </View>

                
                )
                }
            
        />
        </View>
    
    
    
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