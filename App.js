import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image } from "react-native";
import 'localstorage-polyfill'
import useFetch from "./Local";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
    console.log(data);
  }, [data]);

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
      }}
    >
      {isLoading ? (
        <Text>Loading. Please wait!</Text>
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
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  style={{
                    width: 150,
                    height: 170,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom:10
                  }}
                  source={{uri:item.image}}
                />
                <Text style={{ color: "black", textAlign: "center"}}>
                  {item.title}
                </Text>
                <Text style={{ color: "red" , marginBottom:10}}>$ {item.price}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}