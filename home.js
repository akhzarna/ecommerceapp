import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image, ScrollView,TouchableOpacity } from 'react-native';
import CustomApiHook from './CustomApiHook';
import { AsyncStorage } from 'react-native';
import { useEffect,useState } from 'react';


export default function Home({navigation}) {
    const data = CustomApiHook('https://fakestoreapi.com/products');
    

     
    const {bookmark,setBookMark} = useState(null);
  global.books=[];
  console.log(books)
  const bm=(title,price,image)=>{
  let obj ={};
  obj={title,price,image};
  books.push(obj);

console.log(books)
  }
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
                    
                    <Text style={{fontSize:15,margin:10}}> {item.title}</Text>
                    <Text style={{fontSize:20,margin:10,fontWeight:'bold'}}>  ${item.price}</Text>
                    <Text style={{fontSize:20,margin:10,fontWeight:'bold'}}>Buy here</Text>
                    
                    <TouchableOpacity style={{width:100, height:50,margin:3, backgroundColor:'#F02E2E', alignItems:'center',justifyContent:'center',borderRadius:10}}
                      onPress={()=> bm(item.title,item.price,item.image)}
          >
        <Text style={{fontWeight:"bold",color:"blue"}}>Add up </Text>
        
      </TouchableOpacity>
                </View>
                )}   
        />
        </View>
    
    <View style={{flex:10, alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity style={{width:200, height:50,margin:3, backgroundColor:'#F02E2E', alignItems:'center',justifyContent:'center',borderRadius:10}}
    onPress={() =>
      navigation.navigate('bookmark',books)
      }
          >
        <Text style={{fontWeight:"bold",color:"white"}}>Bookmark here</Text>
        
      </TouchableOpacity>
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