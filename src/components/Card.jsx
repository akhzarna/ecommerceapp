import { View, Text, Image, Pressable } from "react-native";
import { HeartIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartFilled } from "react-native-heroicons/solid";
import React, { useState } from "react";

const Card = ({ item }) => {
  const [liked, setliked] = useState(false);
  return (
    <View className="border items-center justify-center w-3/4rounded-md bg-white flex flex-col space-y-5">
      <View className="absolute right-5">
        {liked ? (
          <HeartFilled
            onClick={() => setliked(!liked)}
            className="w-7 h-7 text-red-500"
          />
        ) : (
          <HeartIcon onClick={() => setliked(!liked)} className="w-7 h-7" />
        )}
      </View>
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
