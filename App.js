import React, { useEffect, useState } from "react";

import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  styles,
} from "react-native";

export default function List(navigation) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
      }}
    >
      <Text Styles={{ justifyContent: "center", marginBottom: 30 }}>
        Welcome to online store
      </Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "blue",
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
                  {item.price}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}
