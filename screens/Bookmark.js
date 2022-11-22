import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FavouritesContext } from '../favourite-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Bookmark() {

    const fvtCxt = useContext(FavouritesContext);
    const [fvtdata, setfvtdata] = useState([])



    const fav = fvtdata.filter(favourite => fvtCxt.ids.includes(favourite.id))
    // const [localfvt, setlocalfvt] = useState()



    // async function getfavdata() {
    //     const favdata = await AsyncStorage.getItem('favdata'); //
    //     setlocalfvt(JSON.parse(favdata)) //
    // }








    const getlocaldataFromUserDevice = async () => {
        try {

            const datalocal = await AsyncStorage.getItem('data');




            if (datalocal != null) {
                setfvtdata(JSON.parse(datalocal))


            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {

        getlocaldataFromUserDevice();
        // const stringifydata = JSON.stringify(fav); // 
        // AsyncStorage.setItem('favdata', stringifydata); //
        // getfavdata()
        // console.log(localfvt)



    }, []);



    const renderItem = ({ item }) => (
        <View style={styles.card}>
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
        <View>
            <Text>Bookmark</Text>
            <FlatList
                numColumns={2}
                data={fav}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 12,
        paddingBottom: 18,
        borderRadius: 24,
        backgroundColor: 'white',
        width: '45%',
        margin: 8
    }
})