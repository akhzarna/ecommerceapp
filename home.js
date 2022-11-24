import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import CustomApiHook from './CustomApiHook';
import { useEffect, useState } from 'react';


export default function Home({ navigation }) {
    const data = CustomApiHook('https://fakestoreapi.com/products');


    const [selectedItem, setSelectedItem] = useState("");

    global.src = require("./assets/heart.png");

    const setImage = (src) => {
        setSelectedItem(src);
    };

    const { bookmark, setBookMark } = useState(null);
    global.books = [];
    console.log(books);
    const bm = (a, b, c, d) => {
        let obj = {};
        obj = { a, b, c };
        if (books.length > 0) {
            for (var i = 0; i <= books.length(); i++) {
                for (var j = i + 1; j <= books.length(); j++) {
                    if (books[i].d != books[j].d) {

                    }

                }
                books.push(obj);
            }
        }
        else {
            books.push(obj);
        }

        src = require("./assets/red-heart.png");
        setImage(src);
        console.log(books);
    };

    useEffect(() => {
        setImage(src);
    }, []);


    return (

        <View style={{ flex: 1, }}>
            <View style={{ flex: 90, }}>
                <FlatList
                    data={(data)}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={
                        ({ item }) => (
                            <View style={{ backgroundColor: 'green', margin: 10, height: 400, width: 180, borderRadius: 10, elevation: 2, alignItems: 'center' }}>
                                <Image source={{ uri: item.image }} style={{ height: 100, width: 100, marginTop: 20 }} />
                                <TouchableOpacity
                                    onPress={() => bm(item.title, item.price, item.image, item.id)}
                                >
                                    <Image
                                        source={selectedItem}
                                        style={{ height: 50, width: 50, marginLeft: 120 }}
                                    />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 15, margin: 10 }}> {item.title}</Text>
                                <Text style={{ fontSize: 20, margin: 10, }}>  ${item.price}</Text>
                                <Text style={{ fontSize: 20, margin: 10, }}>BUY NOW</Text>

                            </View>
                        )
                    }

                />
            </View>

            <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ width: 200, height: 50, margin: 3, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}
                    onPress={() =>
                        navigation.navigate('bookmark', books)
                    }
                >
                    <Text style={{ color: "white" }}>BOOKMARK</Text>

                </TouchableOpacity>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});