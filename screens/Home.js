import { Button, FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { EvilIcons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import useFetch from '../util/fetchHook';





export default function Home() {

    const data = useFetch("https://fakestoreapi.com/products")
    const [homedata, setData] = useState(null)



    // const getlocaldataFromUserDevice = async () => {
    //     try {
    //         const datalocal = await AsyncStorage.getItem('data');
    //         console.log('this is '+datalocal)
    //         if (datalocal != null) {
    //             sethomedata(datalocal)
                
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const getlocaldataFromUserDevice = async () => {
        try {
          const datalocal = await AsyncStorage.getItem("data");
          if (datalocal != null) {
            setData(JSON.parse(datalocal));
          }
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(() => {
        getlocaldataFromUserDevice();
        
    }, []);


    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <TouchableOpacity>
                <EvilIcons name="heart" size={24} color="black" />
            </TouchableOpacity>
            <Image
                style={{ wid: '100%', height: 180 }}
                source={{
                    uri: item.image,
                }}
            />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'black' }} > {item.title}</Text>
                <Text style={{ color: 'green', fontWeight: 'bold' }}>${item.price}</Text>
                <TouchableOpacity >
                    <Text style = {{fontWeight: 'bold'}}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
       
    );

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={homedata}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> 
            
            <TouchableOpacity style={styles.red}>
                <Text style={{color: 'white'}}>Saved Bookmarks</Text>
            </TouchableOpacity>
            
        </View>
         
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E2FAB5'

    },
    card: {
        padding: 12,
        paddingBottom: 18,
        borderRadius: 20,
        backgroundColor: 'white',
        width: '45%',
        margin: 8
    },
    red: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        position: 'absolute',
        bottom: 10,
        // right: 60,
        height: 70,
        backgroundColor: 'green',
        borderRadius: 100,
      }
})