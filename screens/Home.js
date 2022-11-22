import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useFetch } from '../util/fetchHook'
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavouritesContext } from '../favourite-context';






export default function Home() {

    const [favourite, setfavourite] = useState(false)

    const fvtCxt = useContext(FavouritesContext);


    const [favouriteid, setfavid] = useState([])
    useFetch("https://fakestoreapi.com/products")
    const [homedata, sethomedata] = useState(null)
    const navigation = useNavigation()





    const getlocaldataFromUserDevice = async () => {
        try {
            const datalocal = await AsyncStorage.getItem('data');
            if (datalocal != null) {
                sethomedata(JSON.parse(datalocal))
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
            <TouchableOpacity onPress={() => {
                setfavourite(true)
                // setfavid([item.id])
                setfavid(item.id)
                fvtCxt.addFavourite(item.id)

            }}>


                <AntDesign name={favourite && favouriteid == item.id ? "heart" : "hearto"} size={18} color="red" />

            </TouchableOpacity>
            <Image
                style={{ width: '100%', height: 180 }}
                source={{
                    uri: item.image,
                }}
            />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'black' }} > {item.title}</Text>
                <Text style={{ color: 'blue', fontWeight: 'bold' }}>{item.price}</Text>
                <TouchableOpacity>
                    <Text>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>


    );

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 32 }}>Shop Now</Text>
            <FlatList
                numColumns={2}
                data={homedata}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Button onPress={() => {
                navigation.navigate("bookmark")
            }}
                title='Go To Bookmarks' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFF5F5'

    },
    card: {
        padding: 12,
        paddingBottom: 18,
        borderRadius: 24,
        backgroundColor: 'white',
        width: '45%',
        margin: 8
    }
})