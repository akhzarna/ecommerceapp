import { View, Text, SectionList } from "react-native";
import React from "react";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const Sectionlist = () => {
  const renderItem = ({ item }) => (
    <View className="">
      <Text className="text-white text-lg">{item}</Text>
    </View>
  );

  return (
    <View className="flex-1 items-center bg-gray-500 justify-center space-y-10">
      <Text className="text-xl text-white">Welcome to Section List</Text>
      <View className="basis-1/2 border px-4 py-1 w-full border-white">
        <SectionList
          sections={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="text-white text-lg border-b border-white">
              {title}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

export default Sectionlist;
