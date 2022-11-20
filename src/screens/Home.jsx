import { View, Text, Pressable } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View className="flex-1 items-center bg-gray-500 justify-center space-y-10">
      <Text className="text-xl text-white">Welcome to Home</Text>
      <View className="flex flex-row space-x-5">
        <Pressable onPress={() => navigation.navigate("flatlist")}>
          <Text className="text-lg text-black bg-white rounded-md px-4 py-2">
            Flat List
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("sectionlist")}>
          <Text className="text-lg text-black bg-white rounded-md px-4 py-2">
            Section List
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
