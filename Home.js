import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image, ScrollView ,TouchableOpacity} from 'react-native';
import CustomApiHook from './CustomApiHook';
import { AsyncStorage } from 'react-native';
import { useEffect,useState } from 'react';


export default function Home({navigation}) {
    const data = CustomApiHook('https://fakestoreapi.com/products');
    const [selectedItem, setSelectedItem] = useState("");

    // global.src = require("./assets/heart.png");

    // const setImage = (src) => {
    //     setSelectedItem(src);
    // };

    // const { bookmark, setBookMark } = useState(null);
    // global.books = [];
    // console.log(books);
    // const bm = (a, b, c, d) => {
    //     let obj = {};
    //     obj = { a, b, c };
    //     if (books.length > 0) {
    //         for (var i = 0; i <= books.length(); i++) {
    //             for (var j = i + 1; j <= books.length(); j++) {
    //                 if (books[i].d != books[j].d) {

    //                 }

    //             }
    //             books.push(obj);
    //         }
    //     }
    //     else {
    //         books.push(obj);
    //     }

    //     src = require("./assets/red-heart.png");
    //     setImage(src);
    //     console.log(books);
    // };

    useEffect(()=>{
        
    },[])
    
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex: 0.9 }}>
   <ScrollView>
<FlatList
            data={(data)}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={
                ({item}) => (
<View style={{backgroundColor:'black', margin:10, height:200,width:800,borderRadius:10, elevation:2,alignItems:'center' }}>
<Image source={{uri:item.image}} style={{height:100,width:100}} />
{/* 
<TouchableOpacity
                                    onPress={() => bm(item.title, item.price, item.image, item.id)}
                                >
                                    <Image
                                        source={selectedItem}
                                        style={{ height: 60, width: 60, marginLeft: 120 }}
                                    />
                                </TouchableOpacity> */}
                    
                    <Text style={{fontSize:20, color:'white',margin:10}}> {item.title}</Text>
                    <Text style={{fontSize:20, color:'white',margin:10}}>  ${item.price}</Text>
                </View>

                
                )
                }
                />
    
    </ScrollView>
    </View>
    <View style={{ flex: 0.1 }}>
    <TouchableOpacity
        style={styles.button}
        onPress={() =>
            navigation.navigate('Bookmark')}
    
      >
          <Text style={styles.text}>Bookmark</Text>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'gray',

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }})