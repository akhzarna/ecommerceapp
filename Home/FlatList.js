import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList ,SafeAreaView,TouchableOpacity,Image } from 'react-native';
import {useState} from 'react'
import favicon1 from './Image/favicon1.png';



const Item = ({ title }) => (
  <View style={styles.items}>

  <View style={styles.favIcon} >
    <TouchableOpacity onPress={()=>setfav(!fav)}>
  <Image
  
  style={styles.favIcon}
  source={{
    uri: favicon1,
  }}
  />
  
  </TouchableOpacity>
  </View>
  <View style={styles.imageView}>
  <Image
  style={styles.tinyLogo}
  source={{
    uri: title.image,
  }}
  />
  </View>

  <View style={styles.text}>
    <Text>{title.category}</Text>
    <Text style={{color:'lightblue'}}>{title.price}</Text>
    <Text style={{fontWeight:'700'}}>Buy Now</Text>
  </View>

</View>
);

export default function FlatListComp({Data}) {
  

const renderItem = ({ item }) => (
  <Item title={item} />
);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView> 
       </View>
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
  mainView:{
    backgroundColor:'lightblue',
    width:300,
    height:450,
    paddingLeft:10,
    paddingTop:10
  },
  items:{
    width:140,
    height:215,
    backgroundColor:"white",
    paddingTop:10,
    paddingLeft:10

  },
  favIcon:{
    marginLeft:95,
  },

  imageView:{
    width:120,
    height:100,

  },
  tinyLogo:{
    width:120,
    height:120,
  },
  text:{
    marginTop:26,
    width:120,
    justifyContent:'center',
    alignItems:'center'
  },
  favIcon:{
    marginLeft:53,
    width:15,
    height:15
  }
});
