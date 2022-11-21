import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const Card = ({ item }) => {
  return (
    <View className="border items-center justify-center w-3/4rounded-md bg-white flex flex-col space-y-5">
      <Image
        style={{ width: "200", height: 200 }}
        source={{ uri: item?.image }}
      />
      <Text>{item?.title}</Text>
      <Text className="text-blue-400">${item?.price}</Text>
      <Pressable>
        <Text>BUY NOW</Text>
      </Pressable>
    </View>
  );
};

export default Card;
