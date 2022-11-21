import { View, Text, Image, Pressable } from "react-native";
import { HeartIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartFilled } from "react-native-heroicons/solid";
import React, { useState } from "react";

const Card = ({ item }) => {
  const [liked, setliked] = useState(false);
  return (
    <View
      className=" items-center justify-center w-full p-2 my-5 border border-gray-300 rounded-md
     bg-white flex flex-col space-y-5"
    >
      <View className=" absolute top-5 right-10">
        <Pressable onPress={() => setliked(!liked)}>
          {liked ? (
            <HeartFilled color={"red"} size={36} />
          ) : (
            <HeartIcon color={"red"} size={36} />
          )}
        </Pressable>
      </View>
      <Image source={{ uri: item?.image }} className="w-48 h-48" />
      <View className="flex flex-col space-y-1 items-center justify-center">
        <Text className="text-lg font-semibold">{item?.title}</Text>
        <Text className="text-blue-400 text-lg">${item?.price}</Text>
        <Pressable>
          <Text className="px-4 py-2 text-lg font-semibold bg-gray-200 rounded-md">
            BUY NOW
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Card;
