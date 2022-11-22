import React, { useState , useEffect} from "react";
import { StyleSheet, Text, View, FlatList,
   ActivityIndicator, Image, TouchableOpacity } from 'react-native';
   import {Button, Input} from "react-native-elements";
  /* import axios from 'axios';
  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'; */
  import {useAxiosFetch} from './axiosHookGet'
  //import {useAxiosPost} from './src/axiosHookPost'


const Flatlist = ({navigation}) => {
 
  const [favourite, setFavourite] = useState("");
  global.setting={
   var : favourite
  
  }

 
  
    console.log(useAxiosFetch({method: 'GET', url: '/products'}));
    //console.log(useAxiosPost({method: 'POST'}));
    const{data, loader, error}= useAxiosFetch({method: 'GET', url: 'products'});
  
  
   /*  const [loader,setLoader] = useState(false);
    const [data,setData] = useState([]);
    const [error,setError] = useState('');
    
  
    useEffect(()=>{
      const ApiCall=async ()=>{
        try{
        setLoader(true);
          const resp = await axios.request({
            method:'GET',
            url: '/posts'
          });
          if(resp.status==200)
          {
              setLoader(false);
              setData(resp.data);
          }
          else{
            setError('Something went wrong');
          }
        }
        catch(err){
          setError('Something went wrong');
  
        }
      }
      ApiCall();
    },[])
   console.log(data,error,loader,'state------->'); */
  
  //for loading symbol like circle occur for loading
   
  
  if(loader){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="black"/>
      </View>
    );
   }
   
  
   //for error page due to any issue
  
   if(error)
   {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'red'}}>{error}</Text>
    </View>
    )
  
   }
  
    return <View style={{flex:1}}>
  
       
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({item})=>
          (
            <View style={{padding: 30, borderWidth: 4, borderColor: 'grey', alignItems: 'center', justifyContent: 'center', flex: 0.60}}>
            
            <Image source= {{uri:item.image}} style={{width:200, height:290, borderWidth:2,borderColor:'black', resizeMode:'contain', margin:8}}></Image>
            <Text style={{fontSize: 20, color:'black', margin: 20}}>{item.title}</Text>
            <Text style={{fontSize: 20, color:'blue', margin: 20}}>PRICE = {item.price} /- RS</Text>
            <Button title='Buy Now'></Button>
            <TouchableOpacity size= {10} leftIcon={{type:"material", name:"Favorite"}}></TouchableOpacity>
            <Button leftIcon={{type:"material", name:"Favorite"}} onPress={()=>setFavourite(item)}></Button>
            </View>
            )
          } 
        />
        <Button title='BOOK MARK' style = {styles.button} onPress={()=>navigation.navigate('BookMark')}></Button>
      </View>
  console.log(favourite)
  };

export default Flatlist;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,
        alignItems: 'center'

    },
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})