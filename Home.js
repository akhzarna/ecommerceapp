import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      setData(data);
      setLoading(false);
    };
    useEffect(() => {
      fetchData();
  },[]);
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {loading ? <ActivityIndicator/> : (
        <FlatList style={{}}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{}}>
                <Text>{item.name}, {item.price}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};