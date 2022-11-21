import { View, Text, FlatList } from "react-native";
import React from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Flatlist = () => {
  const renderItem = ({ item }) => (
    <View>
      <Text className="text-white text-lg">{item.title}</Text>
    </View>
  );

  return (
    <View className="flex-1 items-center bg-gray-500 justify-center space-y-10">
      <Text className="text-xl text-white">Welcome to Flat List</Text>
      <View className="basis-1/2 border px-4 py-1 w-full border-white">
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Flatlist;
