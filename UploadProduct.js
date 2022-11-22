import { StyleSheet, Text, View , FlatList , Image } from 'react-native';
import React, { useEffect , useState } from 'react';
import { useRoute } from '@react-navigation/native';

const UploadProduct = () => {
  const [fav, setfav] = useState([]);
  const route = useRoute();
useEffect(()=>{
  setfav(route.params.bookmark);
})
  return (
    <View style={styles.container}>

<FlatList
                 // set number of columns
 columnWrapperStyle={styles.row}  // space them out evenly

 data={fav}
 renderItem={({item}) =>

 <View >

     <Image source = {{uri:item.image}}
style={styles.productcart}
   style = {{ width: 200, height: 200 }}
   />
 <Text style={styles.productcart}> {item.title}</Text>
 <Text style={styles.productcart}> {item.price}</Text>

 </View>
 }
/>

    </View>
  );
};

export default UploadProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color : 'red',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 50,
  },
});