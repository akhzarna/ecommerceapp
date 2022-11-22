import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

export default function FlatList1() {
  const arr = [
    { id: 1, name: "munib" },
    { id: 2, name: "hadi" },
  ];
  return (
    <View>
      <FlatList
        data={arr}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
