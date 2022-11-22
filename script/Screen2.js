import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View , Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFetching from '../fetchingHook';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function Screen2({navigation}) {

    const data = useFetching("https://fakestoreapi.com/products")

    const [storedata, setstoredata] = useState(null)

    const[newdata,setnewdata] = useState(null)

    console.log(" BookmareD Product ID is ",newdata)
  //const test = () => {
   
  //   setnewdata = item.id.map((item) => <p>{item}</p>)
 // }


    const getharddisk = async () => {
        try {
            const datadisk = await AsyncStorage.getItem('data');
            if (datadisk != null) {
                setstoredata(JSON.parse(datadisk))
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getharddisk();
    }, []);


    var clr='red'
    return (

       
        <View style={{flex:0.94}} >

            <FlatList
                numColumns={2}
                vertical={true}
                data={storedata}
                keyExtractor={item => item.id}
                renderItem={
                    ({item}) => (

                  <View style={styles.mycard}>
                      

        <View styles={{}}>

        
            <Button
          title="BookMark Me"
          onPress={() =>
        
           setnewdata(item.id)
        
           
          }
          color={clr}
          
          
        />
        </View>    

                      <Image
                          style={{ width: 80, height: 120, marginTop:10 }}
                          source={{
                              uri: item.image,
                          }}
                      />
                      <View style={{ alignItems: 'center' }}>
                          <Text style={{ color: 'black' }} > {item.title}</Text>
                          <Text style={{ color: 'purple', fontWeight: 'bold' }}> $ {item.price}</Text>
                          <TouchableOpacity style={{backgroundColor:'green'}}>
                              <Text>Buy Now</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
            
        
                    )  }

                    />
                    
         <View style={{}}>

         <Button
          title="Check Bookmarks"
          onPress={() =>
          navigation.navigate('Screen3', {newdata} )
         
        }
        />

<Text style={{marginTop:11}}>
    Bookmared Product ID is:       {newdata}
</Text>
         </View>

                    </View>
    );

    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFF5F5'

    },
    mycard: {
        padding: 8,
        paddingBottom: 18,
        backgroundColor: 'grey',
        width: '40%',
        margin: 10
    }
})