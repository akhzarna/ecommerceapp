import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { Switch } from "react-native-paper";

export default function List(navigation) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [hookdata, setHookdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((hookdata) => setHookdata(hookdata));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())

      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const useFetch = (url) => {
    const [status, setStatus] = useState("idle");
    const [data, setData] = useState([]);

    useEffect(() => {
      if (!url) return;
      const fetchData = async () => {
        setStatus("fetching");
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setStatus("fetched");
      };

      fetchData();
    }, [url]);

    return { status, data };
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
            flexDirection: "row",
          }}
        >
          <FlatList
            data={hookdata}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "left",
                  marginTop: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    borderRadius: 20,
                    width: 270,
                    height: 200,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                  source={{ uri: item.image }}
                />
                <Text style={{ color: "grey", textAlign: "center" }}>
                  {item.title}
                </Text>
                <Text style={{ color: "blue" }}>$ {item.price}</Text>
                <Text>BUY NOW!</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}
