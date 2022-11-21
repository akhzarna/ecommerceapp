import React, { useEffect, useState } from 'react'
import { View ,Text, Button, FlatList,StyleSheet,Image, Pressable} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons'; 
const DATA =[];

const DATA1 = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];


async function get (){
    console.log("ok")
   
  };



function Main() {
    const [local , setLocal] = useState([])

    useEffect(()=>{
                            
        axios.get("https://fakestoreapi.com/products")
        .then(function (response) {
DATA.push(...response.data)
//console.log(DATA);
setLocal(...response.data)
//console.log(local)

      })

        async function getData (){ /// for local storage
            console.log("pk")
            try {
              const value = await AsyncStorage.getItem('Data');
             // console.log(value)
             const l = JSON.parse(value)
              setLocal(l)
              
              if (value !== null) {
            
                console.log(local)
              }
              else{
    
             
              try {
                await AsyncStorage.setItem('Data',JSON.stringify(DATA));
              
              } catch (error) {
                // Error saving data
              }
              }
            } 
            
            catch (error) {
              // Error retrieving data
            }
          };

     
  },[])

  function renderItem({item}){
    return(
        <View style={styles.items}>
            <View style={styles.img}>
                <Pressable style={({pressed}) => pressed ? {opacity:0.5} : null}>
            <AntDesign style={{marginLeft:90,marginTop:10}} name="hearto" size={24} color="black" />
            
</Pressable>


            <Image resizeMode='contain' style={{width:70,height:120}} source={{uri:item.image}}/>
            

            </View>
            <Text style={{marginLeft:50,color:"blue"}}>{item.price} $</Text>
            <Text  style={{marginLeft:50,}}>BUY NOW</Text>
          
           


        </View>
    )

  }

  return (
    <View style={{marginTop:50,}}>
       <View>

        <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item,index)=> item+index} numColumns={2}/>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    items:{
        width:160,
        height:200,
        margin:10,
        borderWidth:1,
        borderRadius:10
    },
     img:{
        marginLeft:35
     }

})




export default Main

     









//getData()
