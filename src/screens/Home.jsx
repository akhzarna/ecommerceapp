import { View, Text, Pressable } from "react-native";
import React from "react";
import useStateValue from "../../hooks/useStateValue";
import Toast from "react-native-toast-message";

const Home = ({ navigation }) => {
  const [, dispatch] = useStateValue();
  return (
    <View className="flex-1 items-center bg-gray-500 justify-center space-y-10">
      <Text className="text-xl text-white">Welcome to Home</Text>
      <View className="flex flex-row space-x-5">
        <Pressable onPress={() => navigation.navigate("flatlist")}>
          <Text className="text-lg text-black bg-white rounded-md px-4 py-2">
            Ecommerce
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            Toast.show({
              type: "info",
              text1: "User logged out successfully",
            });
            dispatch({ type: "CHANGE_USER" });
          }}
        >
          <Text className="text-lg text-black bg-white rounded-md px-4 py-2">
            Logout
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
