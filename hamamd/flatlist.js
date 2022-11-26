import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList,useEffect,  } from 'react-native';

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function App() {

  const [data, setData] = useState(
      {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men clothing",
      image: "./assets/lap.jpg"
      }, 
      )
  const [isLoading, setLoading] = useState(true);
  console.log(data);
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
      // useEffect(() => {
      //   fetch('https://fakestoreapi.com/products')
      //     .then((response) => response.json())
      //     .then((json) => setData(json))
      //     .catch((error) => console.error(error))
      //     .finally(() => setLoading(false));
      // }, []);
return (
    <View style={{flex:80, alignContent:'center'}}>
     

    
    <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'grey'}}>        
    <Text style={{ fontSize:30}}> Ecommerce </Text>
    <View>
    <Image style={{height:48,width:48,marginHorizontal:6,marginVertical:3, borderRadius:20}} source={require('./assets/lap.jpg')} />
     <Text>buy now</Text>
     </View>
    </View>
    <FlatList
    data={data}
            renderItem={
                ({item}) => (
                <View style={{flex :1,padding:15,backgroundColor:'black', flexDirection:'row', borderBottomEndRadius:1, }}>
 <View style={{ marginHorizontal:-13, height:25}}>      
                    <Text style={{fontSize:15, color:'white',lineHeight:29 }}>     {item.title}</Text>
                    <Text style={{fontSize:15, color:'white',lineHeight:29 }}>     {item.description}</Text>
                    <Text style={{fontSize:15, color:'white',lineHeight:29 }}>     {item.category}</Text>
                    <Text style={{fontSize:15, color:'white',lineHeight:29 }}>     {item.image}</Text>  
                </View>       
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
  container1:{

  },

  
});
