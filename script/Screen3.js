import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View , Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFetching from '../fetchingHook';


export default function Screen3({navigation}) {

    const data = useFetching("https://fakestoreapi.com/products")
    const [storedata, setstoredata] = useState(null)


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

                      <Image
                          style={{ width: 80, height: 120 }}
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
          title="Go Back"
          onPress={() =>
          navigation.navigate('Screen2')
        }
        />

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