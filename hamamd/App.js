import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function App() {

    
  const [data, setData] = useState([
    {image:{src:require('./assets/lap.jpg')},
    name:'laptop g1',
    price:'109 $'
    
    }, 
  ])
  
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
      useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    
  
return (
    <View style={{flex:80}}>
       <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'grey'}}>        
        <Text style={{ fontSize:30}}> Whatsapp </Text>
      </View>
        <FlatList
            data={data}
            renderItem={
                ({item}) => (
                <View style={{flex :1,padding:15,backgroundColor:'black', flexDirection:'row', borderBottomEndRadius:1, }}>

 {/* <Image style={{height:48,width:48,marginHorizontal:6,marginVertical:3, borderRadius:20}} source={require('./assets/download.png')} /> */}
 <View style={{ marginHorizontal:-13, height:25}}>      
                <Text style={{fontSize:15, color:'white',lineHeight:29, alignItems:'center' }}> source= {{url:item.image}}</Text>
                <Text style={{fontSize:15, color:'white',lineHeight:31, alignItems:'center' }}>     {item.price}</Text>
                </View>       
                </View>
                )
                }
            // keyExtractor={item=>item.key}
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
