import { StyleSheet, Text, View, FlatList } from "react-native";
import { React, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Bookmark() {
  const [bookmark, setBookmark] = useState([]);
  const [num, setNum] = useState(0);

  const getBookmark = async () => {
    try {
      const bookmarks = await AsyncStorage.getItem("data");
      if (bookmarks != null) {
        setBookmark(JSON.parse(bookmarks));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookmark();
  }, []);
  useEffect(() => {}, [num]);
  useEffect(() => {
    console.log("in bookmark page");
    console.log(bookmark);
    setNum(num + 1);
  }, [bookmark]);

  const renderItem = ({ item }) => (
    <View style={styles.list}>
      <Image
        style={{ width: "100%", height: 200, borderRadius: 20, margin: 5 }}
        source={{
          uri: item.image,
        }}
      />
      <Text style={{ fontWeight: "bold", alignSelf: "center" }}>
        {item.title}
      </Text>
      <Text style={{ color: "blue", alignSelf: "center" }}>{item.price}</Text>
      <TouchableOpacity>
        <Text style={styles.buynow}>BUY NOW</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      {bookmark ? (
        <Text>List is Empty {console.log("return")}</Text>
      ) : (
        <FlatList
          numColumns={2}
          data={bookmark}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buynow: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 15,
    color: "gray",
  },
  list: {
    flex: 1,
    padding: 10,
    margin: 10,
    width: "44%",
    borderRadius: 20,
    backgroundColor: "lightgrey",
  },
});
