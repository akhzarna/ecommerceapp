import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const Card = ({ item }) => {
  return (
    <View>
      <View className="border w-full rounded-md bg-white flex flex-col space-y-5">
        <Image source={item?.image} />
        <Text>{item?.title}</Text>
        <Text>{item?.price}</Text>
        <Pressable>
          <Text>BUY NOW</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Card;
