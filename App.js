import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function List(navigation) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const handleB = () => {
    setBookmark(bookmark + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
      }}
    >
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: 70,
              padding: 8,
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            New Collection
          </Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "grey",
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{
                    width: 300,
                    height: 300,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={{ uri: item.image }}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    alert("item added in favourites");
                  }}
                >
                  <Image
                    source={require("./assets/heart.png")}
                    style={{ height: 20, width: 20 }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 3,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  ${item.price}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});
