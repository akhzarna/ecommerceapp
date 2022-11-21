import { View, Text, FlatList } from "react-native";
import React from "react";
import useAPI from "../../hooks/useAPI";
import Card from "../components/Card";

const Flatlist = () => {
  const apiData = useAPI();

  const renderItem = ({ item }) => <Card item={item} />;

  return (
    <View className="flex-1 items-center bg-gray-100 justify-center space-y-10">
      <View className=" w-full h-full">
        <FlatList
          data={apiData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Flatlist;
