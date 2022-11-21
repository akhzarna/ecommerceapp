import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import useAPI from "../../hooks/useAPI";
import Card from "../components/Card";

const Flatlist = () => {
  const apiData = useAPI();
  const renderItem = ({ item }) => <Card item={item} />;

  return (
    <View className="flex-1 items-center bg-gray-100 justify-center space-y-10">
      {!apiData.length ? (
        <ActivityIndicator size={100} color="gray" />
      ) : (
        <View className="">
          <FlatList
            className="px-5"
            data={apiData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
};

export default Flatlist;
