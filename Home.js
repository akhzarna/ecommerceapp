import React, { useState, useEffect } from 'react';
import  AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, TouchableOpacity, View , TextInput  ,Image, FlatList , renderItem, Button } from 'react-native';
import UploadProduct from './UploadProduct';

const Home = (props) => {
    const [products, setProducts] = useState([]);
    const [itemcolor, selecteditems] = useState([]);
    const initialState = [];
    const [bookmark, setbookmark] = useState(initialState);
    //const [bookmark, setbookmark] = useState([]);
    //let user = 'furqan';
    const storeData = async () => {
        //let name = "Michal";
        try{
            AsyncStorage.setItem('user',JSON.stringify(products));
        }
        catch(error){
            console.log(error);
        }
      }
      const [btnColor, setBtnColor] = useState("orange");
    const   displayData = async ()=>{
        try{
          let user = await AsyncStorage.getItem('user');


             getProducts();

           console.log("hellow");
          console.log(user);
          setProducts(user);

        }
        catch(error){
          console.log("error in async")
        }
      }
      const postdata = async () =>{
       console.log('posting data...');
       const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'hasnain good boy' })
    };
    fetch('https://usman-cui-recipies.herokuapp.com/api/products', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ _id: data.id }));
      }
      const buynow = async () =>{
        console.log('btn pressed ' ,  );
      }
    const getProducts = async () => {
        try {
         const response = await fetch('https://fakestoreapi.com/products');
         const json = await response.json();

        setProducts(json);
         //console.log("Products",products)
            storeData(json);
       } catch (error) {
         console.error(error);
       } finally {
        //  setLoading(false);
       }
     }
     const handleClick = (id) => {

      console.log(id);
      console.log("hello");
    }
    const testbook = () => {
      console.log((bookmark));
    }

  const goToMessageScreen = () => {
    props.navigation.navigate('UploadProduct', {
      bookmark,
    });
  };
 const setCategory = (e) => {
    console.
    log(e.target.id)
}
const found = itemcolor.find(obj => {
  if(obj.id == null){
    console.log("Test");
    console.log("get me " , obj);
  }
});

  const clearfav = ()=>{
    setbookmark([]);
    alert("all bookmark cleared!");
    setBtnColor("red");

  }
     useEffect(() => {


         displayData();
         postdata();


       },[]);
//console.log(getRecords);
  return (
    <View style={styles.txt}>
        <Button
 onPress={goToMessageScreen}
 //onPress={testbook}
  title="Check all bookmarked"
  color="#841584"
  //accessibilityLabel="Learn more about this purple button"
/>
<Button
 onPress={()=>{

  clearfav();
 }}
 //onPress={testbook}
  title="Clear Bookmarks"
  color="#841584"
  //accessibilityLabel="Learn more about this purple button"
/>
    <View >
    <View  style={styles.container}>

        <View>

        </View>
<View>
<FlatList
 numColumns={2}                  // set number of columns
 columnWrapperStyle={styles.row}  // space them out evenly

 data={products}
 renderItem={({item}) =>

 <View >
    <Button
  onPress={()=>{
    console.log(item.id);
    if(item.id == 1){
      setBtnColor(current=>"green");
      console.log(JSON.stringify(found));
    }

    setbookmark(current => [...current, {title: item.title , price:item.price , image: item.image} ]);
  }
  }
  style={styles.btn}
  title="Bookmark"
  id = {item.id}
  color={btnColor}

/>
     <Image source = {{uri:item.image}}
style={styles.productcart}
   style = {{ width: 200, height: 200 }}
   />
 <Text style={styles.productcart}> {item.title}</Text>
 <Text style={styles.productcart}> $ {item.price}</Text>
 </View>
 }
/>
</View>

      </View>
        </View>
        </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {

   // backgroundColor : 'orange'
  },
  productcart:{
    //backgroundColor : 'red',
    fontSize  : 15,
    maxWidth : 200
  },
  row: {
    flex: 1,
    //justifyContent: "space-around"
} ,
btn : {
    height : 50
} ,
txt : {
    top :30,
    flex : 1 ,
   // backgroundColor : 'blue'
}
})